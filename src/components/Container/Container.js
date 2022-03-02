import React from 'react';

import ModuleSection from '../ModuleSection/ModuleSection';

import styles from './Container.module.css';

const Container = () => {
	return (
		<container className={styles['tracker__container']} id='container'>
			<ModuleSection />
		</container>
	);
};
export default Container;
