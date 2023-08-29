import React from 'react';
import '../../scssComponents/rightSide/videos.scss'

export function Videos() {
	return <div className="videos">
		<div className="videos__items">
			<div className="videos__item item">
				<div className="item__content">
					<img width={82} height={46} src="img/videosIMG/1-photo.png" alt="" />
					<div className="item__content_about">
						<p className='item__content_title'>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>
						<p className='item__content_subtitle'>Астахова Е.В.</p>
					</div>
					<div className="item__content_date"></div>
				</div>
			</div>
			<div className="videos__item item">
				<div className="item__content">
					<img width={82} height={46} src="img/videosIMG/1-photo.png" alt="" />
					<div className="item__content_about">
						<p className='item__content_title'>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>
						<p className='item__content_subtitle'>Астахова Е.В.</p>
					</div>
					<div className="item__content_date">15.01.2019 - 22.01.2019</div>
				</div>
			</div>
			<div className="videos__item item">
				<div className="item__content">
					<img width={82} height={46} src="img/videosIMG/1-photo.png" alt="" />
					<div className="item__content_about">
						<p className='item__content_title'>Крабик, ходьба в бок в приседе с двумя резинками Кра…</p>
						<p className='item__content_subtitle'>Астахова Е.В.</p>
					</div>
					<span className="item__content_date">15.01.2019 - 22.01.2019</span>
				</div>
			</div>
		</div>
	</div>
}