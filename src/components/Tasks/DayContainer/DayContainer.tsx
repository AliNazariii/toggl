import React, { useState, useEffect } from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';
import moment from 'moment';

interface Props {
    day: string,
    data: [
        {
            duration: number,
            description: string
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
            {data.map((task, index) => <Task key={index} data={task} /> )}
        </div>
    )
}

export default DayContainer;