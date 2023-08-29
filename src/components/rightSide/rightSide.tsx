import React from 'react';
import '../../scssComponents/rightSide/rightSide.scss'
import { Route, Routes } from 'react-router-dom';
import { Profile } from './profileComponent';
import { IUser } from '../../App';
import { Menu } from './menuComponent';
import { Notes } from './notesComponent';
import { Consultation } from './consultationsComponent';
import { Videos } from './videoComponent';
import { Events } from './eventsComponent';

export function RightSide({ users }: { users: IUser[] }) {
	return <div className="right-side">
		<Profile />
		<Menu />
		<Routes>
			<Route path='/notes' element={<Notes /> }/>
			<Route path='/consultations' element={<Consultation />} />
			<Route path='/videos' element={<Videos />}/>
			<Route path='/events' element={<Events />} />
		</Routes>
		
	</div>
}