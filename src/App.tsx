import './App.scss';
import { LeftSide } from './components/leftSide/leftSideComponent';
import { RightSide } from './components/rightSide/rightSide';

export interface IUser {
	photo: string ,
	name: string,
	age?: number,
	gender?: string,
}

export interface IHasCheckbox {
	hasCheckbox: boolean,
	isChecked: boolean,
}

const users: IUser[] = [
	{ photo: 'img/usersPhoto/1-photo.png', name: 'Кравцова Александра', age: 23, gender: 'Жен' },
	{ photo: 'img/usersPhoto/2-photo.png', name: 'Рожков Денис', age: 30, gender: 'Муж' },
	{ photo: 'img/usersPhoto/1-photo.png', name: 'Кравцова Александра', age: 23, gender: 'Жен' },
	{ photo: 'img/usersPhoto/4-photo.png', name: 'Диброва Алевтина', age: 28, gender: 'Жен' },
	{ photo: 'img/usersPhoto/5-photo.png', name: 'Иванов Дмитрий', age: 34, gender: 'Муж' },
	{ photo: 'img/usersPhoto/user.png', name: 'nosikov@list.ru', age: 25, gender: 'Муж' },
	{ photo: 'img/usersPhoto/7-photo.png', name: 'Форс Александр', age: 40, gender: 'Муж' },
	{ photo: 'img/usersPhoto/8-photo.png', name: 'Ахмедов Артур', age: 37, gender: 'Муж' },
	{ photo: 'img/usersPhoto/9-photo.png', name: 'Блажевич Игорь', age: 31, gender: 'Муж' },
	{ photo: 'img/usersPhoto/10-photo.png', name: 'Валиева Руфина', age: 39, gender: 'Жен' },
	{ photo: 'img/usersPhoto/11-photo.png', name: 'Волошина Виктория', age: 31, gender: 'Жен' },
	{ photo: 'img/usersPhoto/11-photo.png', name: 'Волошина Виктория', age: 31, gender: 'Жен' },
]

export function App() {
	return (
		<div className="wrapper">
			<header></header>
			<div className="container">
				<LeftSide users={users} />
				<RightSide />
			</div>
		</div>
	);
}

