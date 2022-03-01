import React from 'react';

import styles from './ModuleSection.module.css';

const TaskNotes = task => {
	return (
		<div className={styles['tracker__module--notes']}>
			<input
				type='text'
				className={styles['tracker__module--notes_input']}
				id={`${task}-notes`}></input>
		</div>
	);
};
export default TaskNotes;
