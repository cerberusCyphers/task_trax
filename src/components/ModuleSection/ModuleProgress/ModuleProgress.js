import React from 'react';

import styles from './ModuleProgress.module.css';

const ModuleProgress = props => {
	return (
		<div className={styles['tracker__container--module-progress']}>
			<progress
				id={'some_progressbar'}
				className={styles['tracker__container--module-progress_bar']}
				value='66'
				max='100'></progress>
		</div>
	);
};
export default ModuleProgress;
