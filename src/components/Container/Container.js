import React from 'react';

import MainHeader from '../MainHeader/MainHeader';
import ModuleSection from '../ModuleSection/ModuleSection';

const Container = () => {
	return (
		<container className='tracker' id='container'>
			<MainHeader></MainHeader>
			<ModuleSection></ModuleSection>
		</container>
	);
};
export default Container;
