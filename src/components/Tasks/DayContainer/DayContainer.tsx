import React from 'react';
import Styles from './DayContainer.module.scss';
import Task from '../Task/Task';

interface Props {
    date: Date
}
const dayContainer = ({ date }: Props) => {
    return(
        <div className={Styles.DayContainer}>
            <div className={Styles.DayContainerHeadings}>
                <h5 className={Styles.DayTitle}>Today</h5>
                <h6 className={Styles.DayTime}>1:01:23</h6>
            </div>
            <Task />
            <Task />
        </div>
    )
}

export default dayContainer;