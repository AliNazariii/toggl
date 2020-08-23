import React from 'react';
import Styles from './TaskDetails.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faTrashAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { TaskType } from '../../reducers/tasks';
import moment from 'moment';

interface State {
	taskDetails: {
		isOpen: boolean,
		task: TaskType
	}
}

const Details = () => { 
    const dispatch = useDispatch();
    const state = useSelector((state: State) => state);
    return(
        <div className={[Styles.DetailsContainer, state.taskDetails.isOpen ? null : Styles.DetailsClose].join(' ')}>
            <div className={Styles.Top}>
                <FontAwesomeIcon 
                    color="#ffffff"
                    size="lg"
                    icon={faTimes} 
                    onClick={() => dispatch({ type: 'CLOSE_DETAILS' })}
                />
                <button className={Styles.SaveBtn} onClick={() => dispatch({ type: 'CLOSE_DETAILS' })}>Save</button>
            </div>
            <div className={Styles.DescriptionBlock}>
                <input type="text" />
            </div>
            <div className={Styles.StaticBlock}>
                <h6>
                    {`EDITING ${state.taskDetails.task.counter} TASK${state.taskDetails.task.counter === 1 ? '' : 'S'}`}
                </h6>
                <h6>{moment.utc(state.taskDetails.task.duration * 1000).format('HH:mm:ss')}</h6>
            </div>
            <div className={Styles.OthersContainer}>
                <div className={Styles.OthersItemBlock}>    
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="lg"
                        icon={faTag} 
                        // onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}
                    />
                </div>
                <div className={Styles.Divider} />
                <div className={Styles.OthersItemBlock}>    
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="lg"
                        icon={faTrashAlt} 
                        // onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}
                    />
                    <h5>{`Delete ${state.taskDetails.task.counter === 1 ? 'this task' : `${state.taskDetails.task.counter} tasks`}`}</h5>
                </div>
            </div>
        </div>
    )
}

export default Details;