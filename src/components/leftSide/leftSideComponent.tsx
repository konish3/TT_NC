import React from 'react';
import '../../scssComponents/leftSideComponent.scss'
import { Search } from './searchComponent';
import { CountUser } from './countUserComponent';
import { Users } from './usersComponent';

export interface IUser {
	photo: string,
	name: string,
}

const users: IUser[] = [
	{ photo: 'img/usersPhoto/1-photo.png', name: 'Кравцова Александра' },
	{ photo: 'img/usersPhoto/2-photo.png', name: 'Рожков Денис' },
	{ photo: 'img/usersPhoto/1-photo.png', name: 'Кравцова Александра' },
	{ photo: 'img/usersPhoto/4-photo.png', name: 'Диброва Алевтина' },
	{ photo: 'img/usersPhoto/5-photo.png', name: 'Иванов Дмитрий' },
	{ photo: 'img/usersPhoto/1-photo.png', name: 'nosikov@list.ru' },
	{ photo: 'img/usersPhoto/7-photo.png', name: 'Форс Александр' },
	{ photo: 'img/usersPhoto/8-photo.png', name: 'Ахмедов Артур' },
	{ photo: 'img/usersPhoto/9-photo.png', name: 'Блажевич Игорь' },
	{ photo: 'img/usersPhoto/10-photo.png', name: 'Валиева Руфина' },
	{ photo: 'img/usersPhoto/11-photo.png', name: 'Волошина Виктория' },
	{ photo: 'img/usersPhoto/11-photo.png', name: 'Волошина Виктория' },
]

export function LeftSide () {
	return <div className="left-side">
		<Search />
		<CountUser />
		<div className="users">
			{users.map((item, index) => <Users key={index + 1} photo={item.photo} name={item.name} />)}
		</div>
	</div>
}