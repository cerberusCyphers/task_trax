import { Fragment } from 'react';

import Container from './components/Container/Container';
import './App.css';
import Button from './components/Button/Button';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
	return (
		<Fragment>
			<main className={'tracker'}>
				<MainHeader />
				<Container />
				<Button />
			</main>
		</Fragment>
	);
}

export default App;
