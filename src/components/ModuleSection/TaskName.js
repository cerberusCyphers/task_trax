import React from 'react';

import classes from './ModuleSection.module.css';

const TaskName = task => {
	return (
		<div className={classes.task_name}>
			<h3>${task}</h3>
		</div>
	);
};
export default TaskName;
