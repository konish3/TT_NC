import React, { Dispatch, SetStateAction, useState } from 'react';
import '../../scssComponents/leftSide/countUser.scss'

type Props = {
	setHasCheckbox: Dispatch<SetStateAction<boolean>>
}

export const CountUser: React.FC<Props> = ({ setHasCheckbox }) => {
	const [none, setNone] = useState<boolean>(true)
	const [checked, setChecked] = useState(false)

	const checkedHandler = (e: React.FormEvent<HTMLInputElement>): void => {
		setChecked(e.currentTarget.checked)
	}

	const setMode = () => {
		setNone(!none)
		setHasCheckbox(!none)
		console.log(none)
	}

	return <div className="count-user">
		<div className={none ? "count-users__content active" : 'none'}>
			<div className="count-users__content_counter">
				213
			</div>
			<button onClick={() => setMode() }>Выбрать</button>
		</div>
		<div className={none ? 'none' : "count-users__content active"}>
			<div className="count-users__content_checkbox">
				<input onChange={(e) => checkedHandler(e)} type="checkbox" />
				<span>Все</span>
				<div className="count-users__content_counter count-checkbox">
					{checked ? 213 : 1}
				</div>
			</div>
			<div className="count-users__content_buttons">
				<button>Действия</button>
				<button onClick={() => setMode()}>Отменить</button>
			</div>
		</div>
	</div>
}