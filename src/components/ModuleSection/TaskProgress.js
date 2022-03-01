import React from 'react';

import styles from './ModuleSection.module.css';

const TaskProgress = task => {
	return (
		<div className={styles['tracker__module--progress']}>
			<progress
				id={'some_progressbar'}
				className={styles['tracker__module--progress_bar']}
				value='50'
				max='100'></progress>
		</div>
	);
};
export default TaskProgress;
