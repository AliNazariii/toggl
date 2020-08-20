import React from 'react';
import Styles from './Task.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useDispatch } from 'react-redux';

interface Props {
    data: {
        duration: number,
        description: string,
        id: number
    }
}

const Task = ({ data }: Props) => { 
    const dispatch = useDispatch()
    const startTask = () => {
        fetch('https://www.toggl.com/api/v8/time_entries', {
            method: 'POST',
            redirect: 'follow',
            headers: new Headers({
                "Authorization": `Basic ${Buffer.from(`b8a34732a49b28401bee4f8619dce939:api_token`).toString('base64')}`,
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({
                "time_entry": {
                    "id": data.id,
                    "description": data.description,
                    "created_with": "curl",
                    "duration": 12,
                    "start": new Date(),
                }
            })
        })
        .then(response => response.text())
        .then(result => {
            // let allTasks: Array<Task> = JSON.parse(result);
            console.log(result)
            // dispatch({ type: 'TOGGLE_RUNNING' })
        })
        .catch(e => console.log(e))
    }

    return(
        <div className={Styles.TaskContainer}>
            <div className={Styles.DescriptionBlock}>
                <h5 className={Styles.Title}>{data.description}</h5>
            </div>
            <div className={Styles.TimePlayBlock}>
                <h5 className={Styles.Duration}>{moment.utc(data.duration * 1000).format('HH:mm:ss')}</h5>
                <FontAwesomeIcon 
                    color="#8a8a8a" 
                    icon={faPlay} 
                    onClick={startTask}
                />
            </div>
        </div>
    )
}

export default Task;