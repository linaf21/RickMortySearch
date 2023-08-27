import React from 'react';
import adjustmentIcon from '../../../assets/icons/adjustmentIcon.svg';
import searchIcon from '../../../assets/icons/searchNew.svg';

export const SearchBar = () => {
  return (
    <div className='w-full h-12 px-4 rounded-lg bg-primary-450 flex items-center justify-between'>
      <div className='w-4/5 flex items-center'>
        <img src={searchIcon} alt="search new" className="h-5 w-5" />
        <span className="text-primary-500 text-sm font-greycliff pl-1 font-normal">Search or filter results</span>
      </div>
      <button>
        <img src={adjustmentIcon} alt="adjustment" className="h-4 w-4" />
      </button>
    </div>
  )
}
