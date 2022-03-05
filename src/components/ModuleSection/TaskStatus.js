import React from 'react';

import styles from './ModuleSection.module.css';

const TaskStatus = props => {
	// const selected = () => {};
	return (
		<div className={styles['tracker__container--module-status']}>
			<select className={styles['tracker__container--module-status_select']}>
				<option value={'Pending'}>Pending</option>
				<option value={'In Progress'}>In Progress</option>
				<option value={'Complete'}>Complete</option>
				<option value={'Cancelled'}>Cancelled</option>
			</select>
		</div>
	);
};
export default TaskStatus;
