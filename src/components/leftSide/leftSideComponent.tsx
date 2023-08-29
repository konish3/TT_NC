import React from 'react';
import '../../scssComponents/leftSide/leftSide.scss'
import { Search } from './searchComponent';
import { CountUser } from './countUserComponent';
import { User } from './userComponent';
import {IUser}  from '../../App';

export function LeftSide ({users}: {users: IUser[]}) {
	return <div className="left-side">
		<Search />
		<CountUser />
		<div className="users">
			{users.map((item, index) => <User key={index + 1} photo={item.photo} name={item.name} />)}
		</div>
	</div>
}