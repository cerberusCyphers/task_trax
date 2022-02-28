import React from 'react';

import classes from './ModuleSection.module.css';

const TaskProgress = task => {
	return (
		<div className={classes.progress}>
			<progress
				id={`${task}-progressbar`}
				className={classes.progress_bar}
				value='50'
				max='100'></progress>
		</div>
	);
};
export default TaskProgress;
