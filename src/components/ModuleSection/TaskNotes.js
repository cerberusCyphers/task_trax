import React from 'react';

import styles from './ModuleSection.module.css';

const TaskNotes = props => {
	return (
		<div className={styles['tracker__container--module-notes']}>
			<input
				type='text'
				className={styles['tracker__container--module-notes_input']}
				id={`${props.name}-notes`}></input>
		</div>
	);
};
export default TaskNotes;
