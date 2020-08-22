interface Action {
    tasks: Map<string, TaskType[]>,
    type: string
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
        default:
            return state;
    };
};

export default tasks;