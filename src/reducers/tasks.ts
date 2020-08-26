import moment from 'moment';
import { AddTaskActionType } from '../actions/tasks/add';
import { UpdateTaskActionType } from '../actions/tasks/update';
import { RemoveTaskActionType } from '../actions/tasks/remove';
import { FetchTaskActionType } from '../actions/tasks/fetch';
export type TaskActionType = 
    | AddTaskActionType | UpdateTaskActionType 
    | RemoveTaskActionType | FetchTaskActionType;

export type TaskType = {
    at?: string,
    billable?: boolean,
    description?: string,
    duration: number,
    duronly?: boolean,
    guid?: string,
    id?: number[],
    start: string,
    stop: string,
    uid?: number,
    wid?: number,
    counter?: number,
    pid?: number
}

const tasks = (state = { tasks: new Map() }, action: TaskActionType) => {
    let tempTasks = state.tasks;
    let dayTasks = [];
    switch (action.type) {
        case 'SET_TASKS':
            return {
                ...state,
                tasks: action.tasks
            };
        case 'ADD_TASK':
            tempTasks = state.tasks;
            const newTask = action.task!;
            if (tempTasks.has(moment(newTask.stop).format('YYYY-MM-DD'))) {
                dayTasks = tempTasks.get(moment(newTask.stop).format('YYYY-MM-DD'));
                let thisTask = dayTasks.find((item: TaskType) => newTask.description === item.description);
                if (thisTask) {
                    for (let i of dayTasks) {
                        if (i.id === thisTask.id) {
                            i.duration += newTask.duration;
                            i.counter += 1;
                            i.id = [...i.id, newTask.id];
                            break;
                        }
                    }
                    tempTasks.set(moment(newTask.stop).format('YYYY-MM-DD'), [...dayTasks])
                } else {
                    tempTasks.set(moment(newTask.stop).format('YYYY-MM-DD'), 
                        [...tempTasks.get(moment(newTask.stop).format('YYYY-MM-DD')), { ...action.task, counter: 1, id: [newTask.id] }])
                }
            } else {
                tempTasks.set(moment(newTask.stop).format('YYYY-MM-DD'), [{ ...action.task, counter: 1, id: [newTask.id] }])
            }
            return {
                ...state,
                tasks: tempTasks
            };
        case 'REMOVE_TASK':
            tempTasks = state.tasks;
            const oldTask = action.task!;
            dayTasks = tempTasks.get(moment(oldTask.stop).format('YYYY-MM-DD'));
            if (dayTasks.length === 1) {
                tempTasks.delete(moment(oldTask.stop).format('YYYY-MM-DD'));
            } else {
                let index = dayTasks.findIndex((item: TaskType) => item.id === oldTask.id);
                dayTasks.splice(index, 1);
                tempTasks.set(moment(oldTask.stop).format('YYYY-MM-DD'), dayTasks);
            }
            return {
                ...state,
                tasks: tempTasks
            };
        case 'UPDATE_TASK':
            tempTasks = state.tasks;
            const updatedTask = action.task!;
            dayTasks = tempTasks.get(moment(updatedTask.stop).format('YYYY-MM-DD'));
            dayTasks.forEach((element: TaskType) => {
                if (updatedTask.id === element.id) {
                    element.description = updatedTask.description
                }
            });
            tempTasks.set(moment(updatedTask.stop).format('YYYY-MM-DD'), [...dayTasks])
            return {
                ...state,
                tasks: tempTasks
            }
        case 'UPDATE_TASK_PROJECT':
            tempTasks = state.tasks;
            const updatedTaskProject = action.task;
            dayTasks = tempTasks.get(moment(updatedTaskProject.stop).format('YYYY-MM-DD'));
            dayTasks.forEach((element: TaskType) => {
                if (updatedTaskProject.id === element.id) {
                    element.pid = updatedTaskProject.pid
                }
            });
            tempTasks.set(moment(updatedTaskProject.stop).format('YYYY-MM-DD'), [...dayTasks])
            return {
                ...state,
                tasks: tempTasks
            }
        default:
            return state;
    };
};

export default tasks;