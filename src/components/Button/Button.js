import React from 'react';

import classes from '../Button/Button.module.css';

const Button = () => {
	return (
		<div>
			<button className={classes.button} id='button'>
				Save Changes
			</button>
		</div>
	);
};
export default Button;
