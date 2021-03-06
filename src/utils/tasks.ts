import moment from 'moment';
import { TaskType } from '../reducers/tasks';
const DATE_FORMAT = 'YYYY-MM-DD';

export const prepareTasks = (tasks: TaskType[]): Map<string, TaskType[]> => {
    let tasksMap = new Map();
    tasks.reverse().forEach((task) => {
        if (tasksMap.has(moment(task.stop).format(DATE_FORMAT))) {
            let dayTasks = tasksMap.get(moment(task.stop).format(DATE_FORMAT));
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
                tasksMap.set(moment(task.stop).format(DATE_FORMAT), [...dayTasks]);
            } else {
                tasksMap.set(
                    moment(task.stop).format(DATE_FORMAT), 
                        [...tasksMap.get(moment(task.stop).format(DATE_FORMAT)), { ...task, counter: 1, id: [task.id] }]
                );
            }
        } else {
            tasksMap.set(moment(task.stop).format(DATE_FORMAT), [{ ...task, counter: 1, id: [task.id] }]);
        }
    });
    return tasksMap;
};