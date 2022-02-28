import React from 'react';

import classes from './ModuleSection.module.css';

const TaskProgress = task => {
	return (
		<div className={classes.progress}>
			<progress
				id={`${task}-progressbar`}
				className={classes.progress_bar}></progress>
		</div>
	);
};
export default TaskProgress;
