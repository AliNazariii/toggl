import React from 'react';
import Styles from './Modal.module.scss';
import { AppState } from '../../../reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { changeDateFormat, changeDurationFormat, closeModal } from '../../../actions/setting';
import { DurationFormats, DateFormats } from '../SettingItem/SettingItem';

function Modal() {
	const state = useSelector((state: AppState) => state.setting);
	const dispatch = useDispatch();
	return (
		<div 
			id="back"
			className={Styles.Modal} 
			style={{ display: state.modal.status ? "block" : "none" }}
			onClick={(e) => {			 
				// @ts-ignore
				if (e.target.id === 'back') dispatch(closeModal())
			}}
		>
			<div className={Styles.ModalContent}>
				<h4>{state.modal.type} format</h4>
				{state.modal.type === "Date" ? 
					DateFormats.map((item, index) => (
						<div 
							className={Styles.ItemContainer} 
							key={index}
							onClick={() => {
								dispatch(changeDateFormat(item));
							}}
						>
							<input 
								type="radio" 
								name="Date" 
								onChange={() => console.log(item)} 
								checked={state.dateFormat === item} 
							/>
							<label>{item}</label>
						</div>
					)) : 
					DurationFormats.map((item, index) => (
						<div 
							className={Styles.ItemContainer} 
							key={index}
							onClick={() => {
								dispatch(changeDurationFormat(index));
							}}
						>
							<input 
								type="radio" 
								name="Duration" 
								onChange={() => console.log(item)} 
								checked={state.durationFormat === index} 
							/>
							<label>{item}</label>
						</div>
					)) 
				}	
			</div>
        </div>
	);
}

export default Modal;
