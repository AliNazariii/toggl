import React, { useState, useEffect } from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';
import moment from 'moment';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType } from '../../../../reducers/tasks';
import { removeTask } from '../../../../actions/tasks';
import { AppState } from '../../../../reducers/index';

interface Props {
    day: string,
    data: Array<TaskType>
}
const DayContainer = ({ day, data }: Props) => {
    const [duration, setDuration] = useState(0);
    const state = useSelector((state: AppState) => state.setting);
    const dispatch = useDispatch();
    useEffect(() => {
        let duration = data.map(task => task.duration).reduce((acc, duration) => acc + duration)
        setDuration(duration)
    }, [data])

    const handleSwipeLeft = (task: TaskType) => {
        dispatch(removeTask(task))
    }

    return(
        <div className={Styles.DayContainer}>
            <div className={Styles.DayContainerHeadings}>
                <h5 className={Styles.DayTitle}>
                    {moment().format('YYYY-MM-DD') === day ? 'Today' : 
                        moment(day).format(String(state.dateFormat))}
                </h5>
                <h6 className={Styles.DayTime}>
                    {duration < 60 ? (
                        `${moment.utc(duration * 1000).format(state.durationFormat === 0 ? 'ss' : 'HH:mm:ss')} ${state.durationFormat === 0 ? "sec" : ""}`

                    ) : (
                        `${moment.utc(duration * 1000).format(state.durationFormat === 0 ? 'mm:ss' : 'HH:mm:ss')} ${state.durationFormat === 0 ? "min" : ""}`
                    )}
                </h6>
            </div>
            <SwipeableList threshold={0.75}>
                {data.map((task, index) =>
                    <SwipeableListItem
                        key={index}
                        swipeLeft={{
                            content: <div className={Styles.SwipeDelete}>Delete</div>,
                            action: () => handleSwipeLeft(task)
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