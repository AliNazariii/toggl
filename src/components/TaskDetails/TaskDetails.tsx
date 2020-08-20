import React from 'react';
import Styles from './TaskDetails.module.scss';
import { useDispatch } from 'react-redux';

const Details = ({ isOpen }: { isOpen: boolean }) => { 
    const dispatch = useDispatch()
    return(
        <div className={[Styles.DetailsContainer, isOpen ? null : Styles.DetailsClose].join(' ')}>
            <button onClick={() => dispatch({ type: 'TOGGLE_OPENNING' })}>aa</button>
        </div>
    )
}

export default Details;