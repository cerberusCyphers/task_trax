import React from 'react';

import styles from './ModuleSection.module.css';

const TaskName = props => {
	return (
		<div className={styles['tracker__container--module-task_name']}>
			<p className={styles['tracker__container--module-task_name-text']}>
				{props.name}
			</p>
		</div>
	);
};
export default TaskName;
