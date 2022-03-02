import React from 'react';

import styles from '';

const TaskNotes = task => {
	return (
		<div className={styles['tracker__container--module-notes']}>
			<input
				type='text'
				className={styles['tracker__container--module-notes_input']}
				id={`${task}-notes`}></input>
		</div>
	);
};
export default TaskNotes;
