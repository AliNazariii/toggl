import moment from 'moment';

interface Action {
    type: string
}

type Task = {
    at: string | Date,
    billable: boolean,
    description: string,
    duration: number,
    duronly: boolean,
    guid: string,
    id: number | number[],
    start: string | Date,
    stop: string | Date,
    uid: number,
    wid: number,
    counter: number
}

const fetchTasks = (state = { tasks: new Map() }, action: Action) => {
    switch (action.type) {
        case 'FETCH_TASKS':
            let tasks = new Map();
            fetch('https://www.toggl.com/api/v8/time_entries', {
                method: 'GET',
                redirect: 'follow',
                headers: new Headers({
                    "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                    "Content-Type": "application/json"
            })})
            .then(response => response.text())
            .then(result => {
                let allTasks: Array<Task> = JSON.parse(result);
                allTasks.reverse();
                allTasks.forEach((task) => {
                    if (tasks.has(moment(task.stop).format('YYYY-MM-DD'))) {
                        let mapTemp = tasks;
    
                        let dayTasks = tasks.get(moment(task.stop).format('YYYY-MM-DD'));
                        let thisTask = dayTasks.find((item: Task) => task.description === item.description);
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
            })
            .catch(e => console.log(e))
            return {
                tasks: tasks
            };
        default:
            return state;
    };
};

export default fetchTasks;