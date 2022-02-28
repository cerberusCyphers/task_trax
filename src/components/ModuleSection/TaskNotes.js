import React from 'react';

import classes from './ModuleSection.module.css';

const TaskNotes = task => {
	return (
		<div className={classes.notes}>
			<input
				type='text'
				className={classes.notes_input}
				id={`${task}-notes`}></input>
		</div>
	);
};
export default TaskNotes;
