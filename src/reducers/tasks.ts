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
        // case 'REMOVE_TASK':
        //     return {
        //         tasks: action.tasks
        //     };
        default:
            return state;
    };
};

export default tasks;