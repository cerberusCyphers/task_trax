import React from 'react';

import ModuleHeader from './ModuleHeader/ModuleHeader';
import ModuleProgress from './ModuleProgress/ModuleProgress';
import TaskRow from './TaskRow';

import styles from './ModuleSection.module.css';

const ModuleSection = props => {
	return (
		<section className={styles['tracker__container--module']}>
			<ModuleHeader project={props.project} />
			<ModuleProgress />
			{props.tasks.map(task => (
				<ul className={styles['tracker__container--module-list']}>
					<TaskRow name={task.name} />
				</ul>
			))}
		</section>
	);
};
export default ModuleSection;
