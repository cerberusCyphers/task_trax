import React from 'react';

import styles from './ModuleHeader.module.css';

const ModuleHeader = project => {
	const currentProject = 'Pending Orders Upgrade';
	return (
		<header className={styles['tracker__container--module-heading']}>
			<h3 className={styles['tracker__container--module-heading_h3']}>
				{currentProject} Progress
			</h3>
		</header>
	);
};
export default ModuleHeader;
