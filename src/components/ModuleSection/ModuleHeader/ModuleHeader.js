import React from 'react';

import styles from './ModuleHeader.module.css';

const ModuleHeader = props => {
	return (
		<header className={styles['tracker__container--module-heading']}>
			<h3 className={styles['tracker__container--module-heading_h3']}>
				{props.project} Progress
			</h3>
		</header>
	);
};
export default ModuleHeader;
