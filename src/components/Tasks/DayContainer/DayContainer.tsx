import React, { useState, useEffect } from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';
import moment from 'moment';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
interface Props {
    day: string,
    data: [
        {
            duration: number,
            description: string,
            id: number,
            counter: number
        }
    ]
}
const DayContainer = ({ day, data }: Props) => {
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        let duration = data.map(task => task.duration).reduce((acc, duration) => acc + duration)
        setDuration(duration)
    }, [data])

    return(
        <div className={Styles.DayContainer}>
            <div className={Styles.DayContainerHeadings}>
                <h5 className={Styles.DayTitle}>{moment().format('YYYY-MM-DD') === day ? 'Today' : moment(day).format('ddd, MMM DD')}</h5>
                <h6 className={Styles.DayTime}>{moment.utc(duration * 1000).format('HH:mm:ss')}</h6>
            </div>
            <SwipeableList threshold={0.45}>
                {data.map((task, index) =>
                    <SwipeableListItem
                        key={index}
                        swipeLeft={{
                            content: <div className={Styles.SwipeDelete}>Delete</div>,
                            action: () => console.info('swipe action triggered')
                        }}
                        swipeRight={{
                            content: <div className={Styles.SwipeStart}>Continue</div>,
                            action: () => console.info('swipe action triggered')
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