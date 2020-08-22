import React, { useState, useEffect } from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';
import moment from 'moment';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { useDispatch } from 'react-redux';
import { TaskType } from '../../../reducers/tasks';

interface Props {
    day: string,
    data: Array<TaskType>
}
const DayContainer = ({ day, data }: Props) => {
    const [duration, setDuration] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        let duration = data.map(task => task.duration).reduce((acc, duration) => acc + duration)
        setDuration(duration)
    }, [data])

    const removeTask = (IDs: number[]) => {
        for (let id of IDs) {
            fetch(`https://www.toggl.com/api/v8/time_entries/${id}`, {
                method: 'DELETE',
                redirect: 'follow',
                headers: new Headers({
                    "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                    "Content-Type": "application/json"
                })
            })
            .then(response => response.text())
            .then(result => {
                // let allTasks: Array<Task> = JSON.parse(result);
                console.log(result)
                // dispatch({ type: 'TOGGLE_RUNNING' })
            })
            .catch(e => console.log(e))
        }
    }

    return(
        <div className={Styles.DayContainer}>
            <div className={Styles.DayContainerHeadings}>
                <h5 className={Styles.DayTitle}>{moment().format('YYYY-MM-DD') === day ? 'Today' : moment(day).format('ddd, MMM DD')}</h5>
                <h6 className={Styles.DayTime}>{moment.utc(duration * 1000).format('HH:mm:ss')}</h6>
            </div>
            <SwipeableList threshold={0.75}>
                {data.map((task, index) =>
                    <SwipeableListItem
                        key={index}
                        swipeLeft={{
                            content: <div className={Styles.SwipeDelete}>Delete</div>,
                            action: () => removeTask(task.id)
                        }}
                        swipeRight={{
                            content: <div className={Styles.SwipeStart}>Continue</div>,
                            action: () => dispatch({ type: 'TOGGLE_RUNNING', description: task.description })
                        }}
                    >
                        <Task data={task} />
                    </SwipeableListItem>
                )}
            </SwipeableList>
        </div>
    )
}

export default DayContainer;