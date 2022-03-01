import React from 'react';

import Button from '../Button/Button';
import MainHeader from '../MainHeader/MainHeader';
import ModuleSection from '../ModuleSection/ModuleSection';

import styles from './Container.module.css';

const Container = () => {
	return (
		<container className={styles['tracker']} id='container'>
			<MainHeader />
			<ModuleSection />
			<Button />
		</container>
	);
};
export default Container;
