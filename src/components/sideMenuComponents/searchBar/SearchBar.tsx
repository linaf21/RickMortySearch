import React from 'react';
import adjustmentIcon from '../../../assets/icons/adjustmentIcon.svg';
import adjustmentFilledIcon from '../../../assets/icons/adjustmentIconFilled.svg';
import searchIcon from '../../../assets/icons/searchNew.svg';

interface SearchBarProps {
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  showFilterModal: boolean;
  setFilterText: React.Dispatch<React.SetStateAction<string>>
  filterText: string
}

export const SearchBar = ({ setShowFilterModal, showFilterModal, setFilterText, filterText }: SearchBarProps) => {

  return (
    <div className='w-full h-12 px-4 rounded-lg bg-primary-450 flex items-center justify-between'>
    <div className='w-4/5 flex items-center'>
    <img src={searchIcon} alt="search new" className="h-5 w-5" />
    <input 
          value={filterText}
          onChange={(event) => setFilterText(event.target.value)}
          placeholder='Search or filter results' 
          className='ml-1 flex w-full items-center animate-none focus:outline-none active:outline-none placeholder-primary-500 text-sm font-greycliff font-normal bg-primary-450' 
          type="text" 
        />
    </div>
    <button onClick={() => setShowFilterModal(!showFilterModal)} className={`hover:bg-primary-850 rounded-md px-2 py-2 hover:scale-105 transform transition-transform open-filter-button ${showFilterModal ? 'filter-modal' : ''}`}>
        {!showFilterModal ? (<img src={adjustmentIcon} alt="adjustment" className="h-4 w-4" />) : <img src={adjustmentFilledIcon} alt="adjustment" className="h-4 w-4" />}
      </button>
    </div>
  )
}