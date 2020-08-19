import React, { useState, useEffect } from 'react';
import Styles from './Tasks.module.scss';
import DayContainer from './DayContainer/DayContainer';
import moment from 'moment';

type Task = {
    at: string | Date,
    billable: boolean,
    description: string,
    duration: Int16Array,
    duronly: boolean,
    guid: string,
    id: Int16Array,
    start: string | Date,
    stop: string | Date,
    uid: Int16Array,
    wid: Int16Array
}

const TasksContainer = () => {
    const [tasks, setTasks] = useState(new Map());
    const [loading, setLoad] = useState(true)
    useEffect(() => {
        fetch('https://www.toggl.com/api/v8/time_entries', {
            method: 'GET',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}` 
        })})
        .then(response => response.text())
        .then(result => {
            let allTasks: Array<Task> = JSON.parse(result);
            allTasks.reverse();
            allTasks.forEach((task) => {
                if (tasks.has(moment(task.stop).format('YYYY-MM-DD'))) {
                    let mapTemp = tasks;
                    mapTemp.set(moment(task.stop).format('YYYY-MM-DD'), [...tasks.get(moment(task.stop).format('YYYY-MM-DD')), task])
                    setTasks(mapTemp);
                } else {
                    tasks.set(moment(task.stop).format('YYYY-MM-DD'), [task])
                }
            })
            setLoad(false)
        })
        .catch(e => console.log(e))
    }, [tasks])

    return(
        <div className={Styles.TasksContainer}>
            {loading ? <h1>load</h1> : 
                [...tasks.keys()].map((day, index) => <DayContainer key={index} day={day} data={tasks.get(day)} /> 
            )}
        </div>
    )
}

export default TasksContainer;