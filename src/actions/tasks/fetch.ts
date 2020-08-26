import moment from 'moment';
import { AppDispatch } from '../../index';
import { TaskType } from '../../reducers/tasks';

export const SET_TASKS = 'SET_TASKS';

export type FetchTaskActionType = {
    type: typeof SET_TASKS,
    tasks: Map<string, Array<TaskType>>
};

export const setTasks = (tasks: Map<string, Array<TaskType>>): FetchTaskActionType => {
    return {
        type: 'SET_TASKS',
        tasks: tasks
    };
};

export const fetchTasks = () => {
    return (dispatch: AppDispatch) => {
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
        })
        .catch(e => console.log(e))
    }
};