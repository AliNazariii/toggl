import React, { useRef, useEffect, useState } from 'react';
import Styles from './TaskDetails.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes,faTrashAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../index';
import moment from 'moment';
import { removeTask, updateTask } from '../../actions/tasks';

const Details = () => { 
    const dispatch = useDispatch();
    const state = useSelector((state: AppState) => state);
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setValue] = useState(state.taskDetails.task.description);
    const remove = () => {
        dispatch(removeTask(state.taskDetails.task));
        dispatch({ type: 'CLOSE_DETAILS' });
    }
    const save = () => {
        dispatch(updateTask(state.taskDetails.task, inputValue!));
        dispatch({ type: 'CLOSE_DETAILS' });
    }
    useEffect(() => {
        if (state.taskDetails.isOpen) {
            // inputRef.current?.focus();
            setValue(state.taskDetails.task.description)
        }
    }, [state.taskDetails.isOpen])
    return(
        <div className={[Styles.DetailsContainer, state.taskDetails.isOpen ? null : Styles.DetailsClose].join(' ')}>
            <div className={Styles.Top}>
                <FontAwesomeIcon 
                    color="#ffffff"
                    size="lg"
                    icon={faTimes} 
                    onClick={() => dispatch({ type: 'CLOSE_DETAILS' })}
                />
                <button className={Styles.SaveBtn} onClick={save}>Save</button>
            </div>
            <div className={Styles.DescriptionBlock}>
                <input 
                    ref={inputRef}
                    value={inputValue || ''} 
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={state.taskDetails.task.description ? undefined : 'Add Description'}
                    type="text" 
                />
            </div>
            <div className={Styles.StaticBlock}>
                <h6>
                    {`EDITING ${state.taskDetails.task.counter} TASK${state.taskDetails.task.counter === 1 ? '' : 'S'}`}
                </h6>
                <h6>{moment.utc(state.taskDetails.task.duration * 1000).format('HH:mm:ss')}</h6>
            </div>
            <div className={Styles.OthersContainer}>
                {/* <div className={Styles.OthersItemBlock}>    
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="lg"
                        icon={faTag} 
                    />
                    <select name="tags" multiple={true}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className={Styles.Divider} /> */}
                <div className={Styles.OthersItemBlock} onClick={remove}>    
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="lg"
                        icon={faTrashAlt} 
                    />
                    <h5>{`Delete ${state.taskDetails.task.counter === 1 ? 'this task' : `${state.taskDetails.task.counter} tasks`}`}</h5>
                </div>
                <div className={Styles.Divider} />
            </div>
        </div>
    )
}

export default Details;