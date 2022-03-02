import { useState } from 'react';

import Container from './components/Container/Container';
import './App.css';
import Button from './components/Button/Button';
import MainHeader from './components/MainHeader/MainHeader';

const moduleSections = [
	{
		id: 1,
		project: 'Pending Orders Updates',
		tasks: [{ name: 'Add Comments to XLSX' }],
		status: ['pending'],
	},
	{
		id: 2,
		project: 'Planning Initial Development',
		tasks: [{ name: 'Render Fielding Report' }],
		status: ['pending'],
	},
	{
		id: 3,
		project: 'Construction Initial Development',
		tasks: [{ name: 'Create Jobs Table' }],
		status: ['pending'],
	},
];

function App() {
	const [sections, setSections] = useState(moduleSections);

	const addSection = section => {
		console.log(setSections);
	};
	console.log(addSection);

	return (
		<main className={'tracker'}>
			<MainHeader />
			<Container projects={sections} />
			<Button />
		</main>
	);
}

export default App;
