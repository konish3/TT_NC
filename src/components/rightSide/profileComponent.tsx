import React from 'react';
import '../../scssComponents/rightSide/profile.scss'

export function Profile () {
	return <div className="profile">
		<div className="profile__about">
			<img width={90} height={90} src="img/usersPhoto/2-photo.png" alt="" />
			<div className="profile__info">
				<p className='profile__name'>Рожков Денис Петрович</p>
				<p className='profile__age'>30 лет, муж</p>
			</div>
		</div>
		<div className="functions">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
}