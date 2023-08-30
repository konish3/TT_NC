import React, { useState } from 'react';
import '../../scssComponents/leftSide/leftSide.scss'
import { Search } from './searchComponent';
import { CountUser } from './countUserComponent';
import { User } from './userComponent';
import { IUser } from '../../App';

export interface IHasCheckbox {
	hasCheckbox: boolean,
}

export function LeftSide({ users }: { users: IUser[] }) {
	
	const [hasCheckbox, setHasCheckbox] = useState<boolean>(false)
	
	return <div className="left-side">
		<Search />
		<CountUser setHasCheckbox={setHasCheckbox} />
		<div className="users">
			{users.map((item, index) => <User key={index + 1} photo={item.photo} name={item.name} hasCheckbox={hasCheckbox} />)}
		</div>
	</div>
}