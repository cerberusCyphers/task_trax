import React from 'react';

import styles from './MainHeader.module.css';

const MainHeader = project => {
	const currentProject = 'Ziply Ops Development';
	return (
		<header className={styles['tracker__heading']}>
			<h1 className={styles['tracker__heading--h1']}>
				{currentProject} Progress
			</h1>
		</header>
	);
};
export default MainHeader;
