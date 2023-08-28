import React from 'react';
import './App.scss';
import { LeftSide } from './components/leftSide/leftSideComponent';

export function App() {
	return (
		<div className="wrapper">
			<header></header>
			<div className="container">
				<LeftSide />
			</div>
		</div>
	);
}

