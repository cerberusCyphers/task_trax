import React from 'react';

import TaskName from './TaskName';
import TaskProgress from './TaskProgress';
import TaskNotes from './TaskNotes';

import classes from './ModuleSection.module.css';

const ModuleSection = () => {
	return (
		<section classname={classes.tracker__module}>
			<TaskName></TaskName>
			<TaskProgress></TaskProgress>
			<TaskNotes></TaskNotes>
		</section>
	);
};
export default ModuleSection;
