import React, { useState } from 'react';
import adjustmentIcon from '../../../assets/icons/adjustmentIcon.svg';
import adjustmentFilledIcon from '../../../assets/icons/adjustmentIconFilled.svg';
import searchIcon from '../../../assets/icons/searchNew.svg';

interface SearchBarProps {
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  showFilterModal: boolean;
}

export const SearchBar = ({ setShowFilterModal, showFilterModal }: SearchBarProps) => {

  return (
    <div className='w-full h-12 px-4 rounded-lg bg-primary-450 flex items-center justify-between'>
      <div className='w-4/5 flex items-center'>
        <img src={searchIcon} alt="search new" className="h-5 w-5" />
        <span className="text-primary-500 text-sm font-greycliff pl-1 font-normal">Search or filter results</span>
      </div>
      <button onClick={() => setShowFilterModal(!showFilterModal)} className={`hover:bg-primary-850 px-2 rounded-md py-2 hover:scale-105 transform transition-transform open-filter-button ${showFilterModal ? 'filter-modal' : ''}`}>
        {!showFilterModal ? (<img src={adjustmentIcon} alt="adjustment" className="h-4 w-4" />) : <img src={adjustmentFilledIcon} alt="adjustment" className="h-4 w-4" />}
      </button>
    </div>
  )
}
