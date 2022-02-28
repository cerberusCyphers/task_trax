import React from 'react';

import classes from './MainHeader.module.css';

const MainHeader = project => {
	return (
		<header className={classes.heading}>
			<h1>`${project} Progress`</h1>
		</header>
	);
};
export default MainHeader;
