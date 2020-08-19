import React from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';
import moment from 'moment';

interface Props {
    day: string,
    data: []
}
const DayContainer = ({ day, data }: Props) => {
    return(
        <div className={Styles.DayContainer}>
            <div className={Styles.DayContainerHeadings}>
                <h5 className={Styles.DayTitle}>{moment().format('YYYY-MM-DD') === day ? 'Today' : moment(day).format('ddd, MMM DD')}</h5>
                <h6 className={Styles.DayTime}>1:01:23</h6>
            </div>
            {data.map((task, index) => <Task key={index} data={task} /> )}
        </div>
    )
}

export default DayContainer;