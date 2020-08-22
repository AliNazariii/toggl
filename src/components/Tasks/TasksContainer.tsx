import React, { useState, useEffect } from 'react';
import Styles from './Tasks.module.scss';
import DayContainer from './DayContainer/DayContainer';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { TaskType } from '../../reducers/tasks';
import { setTasks } from '../../actions/tasks';
interface State {
	tasks: {
		tasks: Map<string, Array<TaskType>>
	}
}

const TasksContainer = () => {
    const [loading, setLoad] = useState(true)
    const dispatch = useDispatch();
    const tasks = useSelector((state: State) => state.tasks.tasks);
    useEffect(() => {
        fetch('https://www.toggl.com/api/v8/time_entries', {
            method: 'GET',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
        })})
        .then(response => response.text())
        .then(result => {
            let allTasks: Array<TaskType> = JSON.parse(result);
            allTasks.reverse();
            let tasks = new Map();
            allTasks.forEach((task) => {
                if (tasks.has(moment(task.stop).format('YYYY-MM-DD'))) {
                    let mapTemp = tasks;

                    let dayTasks = tasks.get(moment(task.stop).format('YYYY-MM-DD'));
                    let thisTask = dayTasks.find((item: TaskType) => task.description === item.description);
                    if (thisTask) {
                        for (let i of dayTasks) {
                            if (i.id === thisTask.id) {
                                i.duration += task.duration;
                                i.counter += 1;
                                i.id = [...i.id, task.id];
                                break;
                            }
                        }
                        mapTemp.set(moment(task.stop).format('YYYY-MM-DD'), [...dayTasks])
                    } else {
                        mapTemp.set(moment(task.stop).format('YYYY-MM-DD'), [...tasks.get(moment(task.stop).format('YYYY-MM-DD')), { ...task, counter: 1, id: [task.id] }])
                    }
                    tasks = mapTemp;
                } else {
                    tasks.set(moment(task.stop).format('YYYY-MM-DD'), [{ ...task, counter: 1, id: [task.id] }])
                }
            })
            dispatch(setTasks(tasks));
            setLoad(false)
        })
        .catch(e => console.log(e))
    }, [])

    return(
        <div className={Styles.TasksContainer}>
            {loading ? <h1>load</h1> : 
                [...tasks.keys()].map((day, index) => (
                    <DayContainer key={index} day={day} data={tasks.get(day)!} />
                ) 
            )}
        </div>
    )
}

export default TasksContainer;