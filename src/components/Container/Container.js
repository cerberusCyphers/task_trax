import React from 'react';

import MainHeader from '../MainHeader/MainHeader';
import ModuleSection from '../ModuleSection/ModuleSection';

import classes from './Container.module.css';

const Container = () => {
	return (
		<container className={classes.tracker} id='container'>
			<MainHeader />
			<ModuleSection />
		</container>
	);
};
export default Container;
