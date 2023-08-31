import React from 'react';
import '../../scssComponents/leftSide/users.scss'
import { IHasCheckbox, IUser } from '../../App';



type Props = IUser & IHasCheckbox;

export const User: React.FunctionComponent<Props> = ({ photo, name, hasCheckbox, isChecked } ) => {
	
	return (
		<div className="user">
			<input checked={isChecked} className={hasCheckbox ? 'none' : 'active'} type="checkbox" />
			<img width={40} height={40} src={photo} alt="#" />
			<p className='user__name'>{name}</p>
		</div>
	)
}