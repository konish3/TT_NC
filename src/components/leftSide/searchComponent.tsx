import React, { useState } from 'react';
import '../../scssComponents/leftSide/search.scss'

export function Search() {

	const [none, setNone] = useState(true)

	return <div className='search'>
		<div className={none ? 'search__content active' : 'none'}>
			<button onClick={() => setNone(!none)}><img width={16} height={16} src="img/loupe-1.svg" alt="" /></button>
			<div className="search__filter-and-plus">
				<button><img width={16} height={16} src="img/filter.svg" alt="" /></button>
				<button><img width={14} height={14} src="img/plus.svg" alt="" /></button>
			</div>
		</div>
		<div className={none ? 'none' : 'search__content active'}>
			<input className='input' type="text" />
			<button onClick={() => setNone(!none)}><img width={14} height={14} src="img/plus.svg" alt="" /></button>
		</div>
	</div>
}