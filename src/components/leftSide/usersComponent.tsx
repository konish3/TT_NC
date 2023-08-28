import React from 'react';
import '../../scssComponents/usersComponent.scss'
import { IUser } from './leftSideComponent';
import { Link } from 'react-router-dom'


export function Users({photo, name}: IUser) {
	
	return <Link to='/'>
		<div className="user">
			<img width={40} height={40} src={photo} alt="#" />
			<p className='user__name'>{name}</p>
		</div>
	</Link>
}