import React, { useEffect, useState, Fragment } from 'react';
// @ts-ignore
import DonutChart from "react-svg-donut-chart";
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { TaskType } from '../../reducers/tasks';
import { ProjectType } from '../../reducers/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMehBlank } from '@fortawesome/free-solid-svg-icons';
import Styles from './Report.module.scss';
import moment from 'moment';

function ReportPage() {
	const state = useSelector((state: AppState) => state);
	const [data, setData] = useState(new Array<pie>());
	interface pie {
		value: number,
		stroke: string,
		name: string
	}
	const colors = ['#3B3561', '#DD7373', '#EAD94C', '#D1D1D1', '#51A3A3', '#7C9EB2', '#FFFCFF', '#CBD4C2', '#C3B299', '#247BA0'];
	useEffect(() => {
		async function calcPercentages() {
			if (state.projects.projects.length > 0) {
				let tasks: TaskType[] = [];
				[...state.tasks.tasks.keys()].forEach(key => tasks = [...tasks, ...state.tasks.tasks.get(key)]);
				let projects = state.projects.projects.map((project: ProjectType) => ({ id: project.id, name: project.name, duration: 0 }));
				projects.push({ id: 111111111, name: 'No Project', duration: 0});
				tasks.forEach(task => {
					if (task.pid === undefined) {
						projects[projects.length - 1].duration += task.duration;
					} else {
						projects.find(projects => projects.id === task.pid)!.duration += task.duration;
					}
				});
				let tempData: pie[] = [];
				projects.forEach((project, index) => {
					if (project.duration > 0) {
						tempData = [
							...tempData,
							{
								name: project.name,
								value: project.duration,
								stroke: colors[index % 10]
							}
						];
					}
				});
				setData(tempData);
			}
		}
		calcPercentages();
	}, [state]);

	return (
        <div className={Styles.ReportsContainer}>
			{data.length <= 1 ? 
                <div className={Styles.EmptyContainer}>
                    <FontAwesomeIcon 
                        color="#8a8a8a"
                        size="6x"
                        icon={faMehBlank} 
                    />
                    <h4>Loading...</h4>
				</div> :
				<div className={Styles.ChartContainer}>
					<div className={Styles.Chart}>
						<DonutChart data={data} /> 
					</div>
					<div className={Styles.Divider} />
					{data.map((project, index) => (
						<Fragment key={index}>
							<div className={Styles.ChartItem}>
								<h5 style={{ color: project.stroke }}>{project.name}</h5>
								<h5 className={Styles.Duration}>{moment.utc(project.value * 1000).format(state.setting.durationFormat === 0 ? 'ss' : 'HH:mm:ss')}</h5>
							</div>
							<div className={Styles.Divider} />
						</Fragment>
					))}
				</div>
            }
        </div>
	);
}

export default ReportPage;
