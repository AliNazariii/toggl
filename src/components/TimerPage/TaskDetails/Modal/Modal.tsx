import React, { useState } from 'react';
import Styles from './Modal.module.scss';
import { AppState } from '../../../../reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../../actions/projects/modal';
import { addProject } from '../../../../actions/projects/add';
import { updateTaskProject } from '../../../../actions/tasks/update';
import { ProjectType } from '../../../../reducers/projects';

function Modal() {
	const state = useSelector((state: AppState) => state);
	const dispatch = useDispatch();
    const [inputValue, setValue] = useState('');

	return (
		<div 
			id="back"
			className={Styles.Modal} 
			style={{ display: state.projects.modal ? "block" : "none" }}
			onClick={(e) => {			 
				// @ts-ignore
				if (e.target.id === 'back') dispatch(closeModal())
			}}
		>
			<div className={Styles.ModalContent}>
				<h4>Select Project</h4>
				<div 
					className={Styles.ItemContainer} 
					onClick={() => {
						dispatch(updateTaskProject(state.taskDetails.task, undefined));
					}}
				>
					<input 
						type="radio" 
						name="project" 
						onChange={() => console.log("No Project")}
						checked={state.taskDetails.task.pid === undefined ? true : false} 
					/>
					<label>No Project</label>
				</div>
				{state.projects.projects.length > 0 ?
					state.projects.projects.map((item: ProjectType, index: number) => (
						<div 
							className={Styles.ItemContainer} 
							key={index}
							onClick={() => {
								dispatch(updateTaskProject(state.taskDetails.task, item.id));
								dispatch(closeModal());
							}}
						>
							<input 
								type="radio" 
								name="project" 
								onChange={() => console.log(item.name)}
								checked={state.taskDetails.task.pid === item.id} 
							/>
							<label>{item.name}</label>
						</div>
				)): null }	
				<div className={Styles.ItemContainer}>
					<input 
						type="text" 
						onChange={(e) => setValue(e.target.value)}
						placeholder="New Project Name"
					/>
					<button onClick={() => {
						dispatch(addProject(inputValue));
						dispatch(closeModal());
					}}>
						Add
					</button>
				</div>
			</div>
        </div>
	);
}

export default Modal;
