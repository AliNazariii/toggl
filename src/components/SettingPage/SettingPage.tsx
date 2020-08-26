import React from 'react';
import Styles from './Setting.module.scss';
import SettingItem from './SettingItem/SettingItem';
import Modal from './Modal/Modal';

function SettingPage() {
	return (
        <div className={Styles.SettingContainer}>
            <SettingItem item="Date" />
            <div className={Styles.Divider} />
            <SettingItem item="Duration" />  
            <div className={Styles.Divider} />
            <Modal />          
        </div>
	);
}

export default SettingPage;
