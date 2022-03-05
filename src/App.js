import { useState } from 'react';

import Container from './components/Container/Container';
import './App.css';
import Button from './components/Button/Button';
import MainHeader from './components/MainHeader/MainHeader';

const moduleSections = [
	{
		id: 1,
		project: 'Reporting Expansion',
		tasks: [
			{
				name: 'Add "Commitment" to Details',
				status: 'in progress',
				weight: 1,
			},
			{
				name: 'Add Report to Reports',
				status: 'in progress',
				weight: 1,
			},
			{ name: 'Add Comments to XLSX', status: 'pending', weight: 1 },
		],
	},
	{
		id: 2,
		project: 'Planning Initial Development',
		tasks: [
			{ name: 'Create Jobs Table', status: 'in progress', weight: 5 },
			{ name: 'Render Fielding Report', status: 'pending', weight: 2 },
		],
	},
	{
		id: 3,
		project: 'Construction Initial Development',
		tasks: [
			{ name: 'Create Jobs Table', status: 'in progress', weight: 2 },
			{ name: 'Add Comments to XLSX', status: 'pending', weight: 1 },
		],
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
