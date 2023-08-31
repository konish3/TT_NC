import React from 'react';
import '../../scssComponents/leftSide/users.scss'
import { IUser } from '../../App';
import { IHasCheckbox } from './leftSideComponent';


type Props = IUser & IHasCheckbox;

export const User: React.FunctionComponent<Props> = ({ photo, name, hasCheckbox } ) => {
	
	return (
		<div className="user">
			<input className={hasCheckbox ? 'none' : 'active'} type="checkbox" />
			<img width={40} height={40} src={photo} alt="#" />
			<p className='user__name'>{name}</p>
		</div>
	)
}