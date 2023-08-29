import React from 'react';
import '../../scssComponents/rightSide/consultation.scss'

export function Consultation() {
	return <div className="consultation">
		<div className="consultation__items">
			<div className="consultation__item">
				<img width={40} height={40} src="img/consultation/activeCamera.svg" alt="" />
				<div className='consultation__item_about'>
					<p className='consultation__item_type'>Online консультация</p>
					<p className='consultation__item_date'>15.01.2019, 12:30-13:00</p>
				</div>
			</div>
			<div className="consultation__item">
				<img width={40} height={40} src="img/consultation/camera.svg" alt="" />
				<div className='consultation__item_about'>
					<p className='consultation__item_type'>Online консультация</p>
					<p className='consultation__item_date'>15.01.2019, 12:30-13:00</p>
				</div>
			</div>
			<div className="consultation__item">
				<button><img width={16} height={14} src="img/consultation/people.svg" alt="" /></button>
				<div className='consultation__item_about'>
					<p className='consultation__item_type'>Личный прием</p>
					<p className='consultation__item_date'>15.01.2019, 12:30-13:00</p>
				</div>
			</div>
		</div>
	</div>
}