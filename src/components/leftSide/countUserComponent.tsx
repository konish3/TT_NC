import React from 'react';
import '../../scssComponents/countUserComponent.scss'

export function CountUser () {
	return <div className="count-user">
		<div className="count-user__content">
			<div className="count-user__content_counter">
				213
			</div>
			<button>Выбрать</button>
		</div>
	</div>
}