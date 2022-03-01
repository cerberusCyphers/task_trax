import React from 'react';

import classes from './ModuleSection.module.css';

const TaskName = task => {
	return (
		<div className={classes['tracker__module--task_name']}>
			<p>Task Name</p>
		</div>
	);
};
export default TaskName;
