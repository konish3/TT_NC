import React, { useState } from 'react';
import '../../scssComponents/leftSide/leftSide.scss'
import { Search } from './searchComponent';
import { CountUser } from './countUserComponent';
import { User } from './userComponent';
import { IUser } from '../../App';



export function LeftSide({ users }: { users: IUser[] }) {
	const [isСhecked, setChecked] = useState(false)
	const [hasCheckbox, setHasCheckbox] = useState<boolean>(true)
	
	return <div className="left-side">
		<Search />
		<CountUser setHasCheckbox={setHasCheckbox} isСhecked={isСhecked} setChecked={setChecked}/>
		<div className="users">
			{users.map((item, index) => 
			<User key={index + 1} 
					photo={item.photo} 
					name={item.name} 
					hasCheckbox={hasCheckbox} 
					isChecked={isСhecked}
					/>)}
		</div>
	</div>
}