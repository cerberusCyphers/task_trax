import React from 'react';

import classes from '../Button/Button.module.css';

const Button = () => {
	return (
		<div className={classes.button} id='button'>
			<button>Save Changes</button>
		</div>
	);
};
export default Button;
