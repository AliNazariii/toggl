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
				{/* {state.projects.projects!.length > 0 ?
					state.projects.projects!.map((item: ProjectType, index: number) => (
						<div 
							className={Styles.ItemContainer} 
							key={index}
							onClick={() => {
								dispatch(updateTaskProject(state.taskDetails.task, item.id));
							}}
						>
							<input 
								type="radio" 
								name="Date" 
								checked={state.projects.projects!.map((project: ProjectType) => project.id).includes(item.id)} 
							/>
							<label>{item}</label>
						</div>
				)): null }	 */}
			</div>
        </div>
	);
}

export default Modal;
