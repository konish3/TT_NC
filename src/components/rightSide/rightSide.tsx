import React, { useState } from 'react';
import '../../scssComponents/rightSide/rightSide.scss';
import { Profile } from './profileComponent';
import { IUser } from '../../App';
import { Menu } from './menuComponent';
import { Notes } from './notesComponent';
import { Consultation } from './consultationsComponent';
import { Videos } from './videoComponent';
import { Events } from './eventsComponent';

export enum TabNameEnum {
	NOTE = 'note',
	CONSULTATION = 'consultation',
	VIDEOS = 'video',
	EVENTS = 'events',
}

function Tab({ name }: { name: TabNameEnum }) {
	switch (true) {
		case name === TabNameEnum.CONSULTATION:
			return <Consultation />;
		case name === TabNameEnum.VIDEOS:
			return <Videos />;
		case name === TabNameEnum.EVENTS:
			return <Events />;
		default:
			return <Notes />
	}
}

export function RightSide() {
	const [tabName, setTabName] = useState<TabNameEnum>(TabNameEnum.NOTE)
	return <div className="right-side">
		<Profile />
		<Menu setTabName={setTabName} />
		<Tab name={tabName} />
	</div>
}