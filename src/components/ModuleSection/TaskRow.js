import React from 'react';

import TaskName from './TaskName';
import TaskNotes from './TaskNotes';
import TaskStatus from './TaskStatus';

import styles from './ModuleSection.module.css';

const TaskRow = props => {
	return (
		<li className={styles['tracker__container--module-list_items']}>
			<TaskName name={props.name} />
			<TaskStatus />
			<TaskNotes />
		</li>
	);
};

export default TaskRow;
