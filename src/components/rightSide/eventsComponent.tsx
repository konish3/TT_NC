import React from 'react';
import '../../scssComponents/rightSide/events.scss'

interface IEvents {
	img: string,
	title: string,
	typeEvent: string,
	date: string
	time: string
}

const event: IEvents[] = [
	{ 
	img: 'img/eventsIMG/photo.png',
	title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
	typeEvent: 'Вебинар',
	date: '9 марта 2021',
	time: '17:00'
	},
	{ 
	img: 'img/eventsIMG/photo.png',
	title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
	typeEvent: 'Вебинар',
	date: '9 марта 2021',
	time: '17:00'
	},
	{ 
	img: 'img/eventsIMG/photo.png',
	title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
	typeEvent: 'Вебинар',
	date: '9 марта 2021',
	time: '17:00'
	},
	{ 
	img: 'img/eventsIMG/photo.png',
	title: 'Тяга резинки в шаге со сгибанием локтя под 90 градусов',
	typeEvent: 'Вебинар',
	date: '9 марта 2021',
	time: '17:00'
	},
]


export function Events() {
	return <div className="events">
		<div className="events__items">
			<div className="events__item">
				<div className="events__item_content">
					<img width={82} height={46} src="img/eventsIMG/photo.png" alt="" />
					<div className="events__item_text">
						<p>Тяга резинки в шаге со сгибанием локтя под 90 градусов</p>
						<ul className='events__item_subtitle'>
							<li>
								<img src="img/eventsIMG/video-camera.svg" alt="" />
								<span>Вебинар</span>
							</li>
							<li>
								<img src="img/eventsIMG/calendar.svg" alt="" />
								<span>9 марта 2021</span>
							</li>
							<li>
								<img src="img/eventsIMG/clock.svg" alt="" />
								<span>17:00</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
}