import React from 'react';
import '../../scssComponents/leftSide/users.scss'
import { IUser } from '../../App';
import { Link } from 'react-router-dom'


export function User({photo, name}: IUser, key: number) {
	// if(photo === ''){
	// 	return photo = 'img/usersPhoto/user.png'
	// }
	// function changeProfile (e: any) {
	// 	console.log()
	// }
	
	return <Link to='/'>
		<div key={key} className="user">
			<img width={40} height={40} src={photo} alt="#" />
			<p className='user__name'>{name}</p>
		</div>
	</Link>
}