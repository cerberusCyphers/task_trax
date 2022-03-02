import React from 'react';

import ModuleHeader from './ModuleHeader/ModuleHeader';
import ModuleProgress from './ModuleProgress/ModuleProgress';
import TaskName from './TaskName/TaskName';
import TaskNotes from './TaskNotes/TaskNotes';
import TaskStatus from './TaskStatus/TaskStatus';

import styles from './ModuleSection.module.css';

const ModuleSection = () => {
	// const moduleSections = [
	// 	'Pending Orders Updates',
	// 	'Planning Initial Development',
	// 	'Construction Initial Development',
	// ];
	return (
		<section className={styles['tracker__container--module']}>
			{/* {moduleSections.map(title => (
				<h2>{title}</h2>
			))} */}

			<ModuleHeader />
			<ModuleProgress />

			<TaskName />
			<TaskStatus />
			<TaskNotes />
		</section>
	);
};
export default ModuleSection;
