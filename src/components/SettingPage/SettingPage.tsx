import React from 'react';
import Styles from './Setting.module.scss';
import SettingItem from './SettingItem/SettingItem';
import Modal from './Modal/Modal';

function SettingPage() {
	return (
        <div className={Styles.SettingContainer}>
            <SettingItem item="Date" />
            <SettingItem item="Duration" />  
            <Modal />          
            <select name="tags">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
	);
}

export default SettingPage;
