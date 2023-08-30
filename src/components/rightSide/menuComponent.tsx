import React, { Dispatch, SetStateAction, useState } from 'react';
import '../../scssComponents/rightSide/menu.scss'
import { Link } from 'react-router-dom';
import { TabNameEnum } from './rightSide';

type Props = {
	setTabName: Dispatch<SetStateAction<TabNameEnum>>;
}

export const Menu: React.FunctionComponent<Props> = ({ setTabName }): JSX.Element => {
	const [text, setText] = useState('Новая заметка')

	return <div className='menu'>
		<ul className='menu__items'>
			<li onClick={setTabName.bind(null, TabNameEnum.NOTE)} className='menu__item'><Link onClick={() => { setText('Новая заметка') }} to='/notes'>Заметки</Link></li>
			<li onClick={setTabName.bind(null, TabNameEnum.CONSULTATION)} className='menu__item'><Link onClick={() => { setText('Записать')}} to='/consultations'>Консультация</Link></li>
			<li onClick={setTabName.bind(null, TabNameEnum.VIDEOS)} className='menu__item'><Link onClick={() => { setText('Рекомендовать') }} to='/videos'>Видео</Link></li>
			<li onClick={setTabName.bind(null, TabNameEnum.EVENTS)} className='menu__item'><Link onClick={() => { setText('Рекомендовать') }} to='/events'>Мероприятия</Link></li>
		</ul>
		<div className='menu__new'>
			<p>{text}</p>
			<button><img width={26} height={26} src='img/add.svg' alt='' /></button>
		</div>
	</div>
}