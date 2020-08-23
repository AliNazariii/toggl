import moment from 'moment';

interface Action {
    tasks: Map<string, TaskType[]>,
    type: string,
    task: TaskType
}

export type TaskType = {
    at: string,
    billable: boolean,
    description: string,
    duration: number,
    duronly: boolean,
    guid: string,
    id: number[],
    start: string,
    stop: string,
    uid: number,
    wid: number,
    counter?: number
}

const tasks = (state = { tasks: new Map() }, action: Action) => {
    let tempTasks = state.tasks;
    let dayTasks = [];
    switch (action.type) {
        case 'SET_TASKS':
            return {
                tasks: action.tasks
            };
        case 'ADD_TASK':
            tempTasks = state.tasks;
            if (tempTasks.has(moment(action.task.start).format('YYYY-MM-DD'))) {
                let dayTasks = tempTasks.get(moment(action.task.stop).format('YYYY-MM-DD'));
                let thisTask = dayTasks.find((item: TaskType) => action.task.description === item.description);
                if (thisTask) {
                    for (let i of dayTasks) {
                        if (i.id === thisTask.id) {
                            i.duration += action.task.duration;
                            i.counter += 1;
                            i.id = [...i.id, action.task.id];
                            break;
                        }
                    }
                    tempTasks.set(moment(action.task.stop).format('YYYY-MM-DD'), [...dayTasks])
                } else {
                    tempTasks.set(moment(action.task.stop).format('YYYY-MM-DD'), 
                        [...tempTasks.get(moment(action.task.stop).format('YYYY-MM-DD')), { ...action.task, counter: 1, id: [action.task.id] }])
                }
            } else {
                tempTasks.set(moment(action.task.stop).format('YYYY-MM-DD'), [{ ...action.task, counter: 1, id: [action.task.id] }])
            }
            return {
                ...state,
                tasks: tempTasks
            };
        case 'REMOVE_TASK':
            tempTasks = state.tasks;
            dayTasks = tempTasks.get(moment(action.task.stop).format('YYYY-MM-DD'));
            if (dayTasks.length === 1) {
                tempTasks.delete(moment(action.task.stop).format('YYYY-MM-DD'));
            } else {
                let index = dayTasks.findIndex((item: TaskType) => item.id === action.task.id);
                dayTasks.splice(index, 1);
                tempTasks.set(moment(action.task.stop).format('YYYY-MM-DD'), dayTasks);
            }
            return {
                ...state,
                tasks: tempTasks
            };
        default:
            return state;
    };
};

export default tasks;