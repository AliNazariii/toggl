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
    counter: number
}

const tasks = (state = { tasks: new Map() }, action: Action) => {
    switch (action.type) {
        case 'SET_TASKS':
            return {
                tasks: action.tasks
            };
        // case 'ADD_TASK':
        //     return {
        //         ...state.tasks,
        //         action.task
        //     };
        case 'REMOVE_TASK':
            console.log(state.tasks)
            let tempTasks = state.tasks;
            let dayTasks = tempTasks.get(moment(action.task.stop).format('YYYY-MM-DD'));
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