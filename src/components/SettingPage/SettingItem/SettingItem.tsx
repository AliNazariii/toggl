import React from 'react';
import Styles from './SettingItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { AppState } from '../../../reducers/index';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../../actions/setting';

export const DurationFormats = [
	'Classic (47:06 min)',
	'Improved (0:47:06)'
]
export const DateFormats = [
    'YYYY-MM-DD',
    'DD/MM/YYYY',
    'DD.MM.YYYY',
    'ddd, YYYY MMM DD',
    'ddd, MMM DD'
];
interface SettingItemProps {
    item: string
}
function SettingItem({ item }: SettingItemProps) {
    const dispatch = useDispatch();
    const state = useSelector((state: AppState) => state.setting)
	return (
        <div 
            className={Styles.SettingItemContainer}
            onClick={() => dispatch(openModal(item))}
        >
            <div className={Styles.Left}>
                <h5>{item}</h5>
                <h6>
                    {item === "Date" ? `${state.dateFormat}` : 
                        state.durationFormat === 0 ? DurationFormats[0] : DurationFormats[1]}
                    </h6>
            </div>
            <FontAwesomeIcon color="#8a8a8a" icon={faAngleDown} />
        </div>
	);
}

export default SettingItem;
