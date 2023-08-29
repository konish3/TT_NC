import React from 'react';
import '../../scssComponents/rightSide/notes.scss'

export function Notes () {
	return <div className="notes">
		<div className="notes__content">
			<div className="notes__content_note">
				<div className="notes__content_note-info">
					<p className='notes__content_text'><span className='notes__content_date'>20.12.2019</span>Физические упражнения способствуют активизации мышечных сокращений, кровотока в тканях, снимают отечность, повышают энергетические возможности мышц. Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.</p>
				</div>
				<div className="functions">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="notes__content_note">
				<div className="notes__content_note-info">
					<p className='notes__content_text'><span className='notes__content_date'>20.12.2019</span>Улучшенное питание мышечной ткани ускоряет замещение различных посттравматических дефектов в самих мышцах, костной ткани, связках и сухожилиях.</p>
					<img width={199} height={134} src="img/note-img.png" alt="" />
				</div>
				<div className="functions">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			
		</div>
	</div>
}