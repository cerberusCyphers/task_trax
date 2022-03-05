import React from 'react';

import ModuleSection from '../ModuleSection/ModuleSection';

import styles from './Container.module.css';

const Container = props => {
	return (
		<div className={styles['tracker__container']} id='container'>
			{props.projects.map(project => (
				<ModuleSection
					id={project.id}
					project={project.project}
					tasks={project.tasks}
					status={project.status}
				/>
			))}
		</div>
	);
};
export default Container;
