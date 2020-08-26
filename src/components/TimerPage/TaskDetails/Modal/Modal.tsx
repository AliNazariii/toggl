import React from 'react';
import Styles from './Modal.module.scss';
import { AppState } from '../../../../reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../../actions/projects/modal';
import { updateTaskProject } from '../../../../actions/tasks/update';
import { ProjectType } from '../../../../reducers/projects';

function Modal() {
	const state = useSelector((state: AppState) => state);
	const dispatch = useDispatch();

	return (
		<div 
			className={Styles.Modal} style={{ display: state.projects.modal ? "block" : "none" }}
			onClick={() => dispatch(closeModal())}
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
							}}
						>
							<input 
								type="radio" 
								name="project" 
								onChange={() => console.log(item.name)}
								checked={state.projects.projects.map((project: ProjectType) => project.id).includes(state.taskDetails.task.pid!)} 
							/>
							<label>{item.name}</label>
						</div>
				)): null }	
			</div>
        </div>
	);
}

export default Modal;
