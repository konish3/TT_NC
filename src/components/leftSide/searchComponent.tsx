import React from 'react';
import '../../scssComponents/searchComponent.scss'

export function Search() {
	return <div className='search'>
		<div className="search__content">
			<button><img width={16} height={16} src="img/loupe-1.svg" alt="" /></button>
			<div className="search__filter-and-plus">
				<button><img width={16} height={16} src="img/filter.svg" alt="" /></button>
				<button><img width={14} height={14} src="img/plus.svg" alt="" /></button>
			</div>
		</div>
	</div>
}