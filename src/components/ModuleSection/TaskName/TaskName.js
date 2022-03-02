import React from 'react';

import classes from '';

const TaskName = task => {
	return (
		<div className={classes['tracker__container--module-task_name']}>
			<p className={classes['tracker__container--module-task_name-text']}>
				Task Name
			</p>
		</div>
	);
};
export default TaskName;
