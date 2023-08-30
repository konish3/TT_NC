import React from 'react';
import '../../scssComponents/rightSide/videos.scss'



export function Videos() {


	return <div className="videos">
		<div className="videos__items">
			<div className="videos__item item">
				<div className="item__content">
					<div className="item__content_about">
						<img width={92} height={46} src="img/videosIMG/1-photo.png" alt="" />
						<div className="item__content_text">
							<p className='item__content_title'>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>
							<p className='item__content_subtitle'>Астахова Е.В.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="videos__item item">
				<div className="item__content">
					<div className="item__content_about">
						<img width={92} height={46} src="img/videosIMG/2-photo.png" alt="" />
						<div className="item__content_text">
							<p className='item__content_title'>Разминка для локтевого сустава</p>
							<p className='item__content_subtitle'>Астахова Е.В.</p>
						</div>
						
					</div>
					<div className="item__content_date">15.01.2019 - 22.01.2019</div>
				</div>
			</div>
			<div className="videos__item item">
				<div className="item__content">
					<div className="item__content_about">
						<img width={92} height={46} src="img/videosIMG/3-photo.png" alt="" />
						<div className="item__content_text">
							<p className='item__content_title'>Разминка для локтевого суставаРазминка для локтевого..</p>
							<p className='item__content_subtitle'>Астахова Е.В.</p>
						</div>

					</div>
					<div className="item__content_date">15.01.2019 - 22.01.2019</div>
				</div>
			</div>
		</div>
	</div>
}