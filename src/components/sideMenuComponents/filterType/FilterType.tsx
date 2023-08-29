import React, { useState, useEffect } from 'react';
import { Filters } from '../../../utils/constants';

interface Option {
  name: string;
}

interface FilterTypeProps {
  filterType: Filters;
  options: Option[];
  selectedFilter: string;
  onFilterChange: (filterType: any, value: any) => void
}

export const FilterType = ({
  filterType,
  options,
  selectedFilter,
  onFilterChange }: FilterTypeProps) => {
  const [localSelectedOption, setLocalSelectedOption] = useState(selectedFilter);

  useEffect(() => {
    setLocalSelectedOption(selectedFilter);
  }, [selectedFilter]);

  return (
    <div className='w-full flex flex-wrap justify-between'>
      <span className='text-primary-500 text-base font-greycliff font-normal w-full'>
        {filterType.toLocaleUpperCase()}
      </span>
      {options.map((option, index) => (
        <button
        key={index}
        className={`md:mt-0 mt-2 h-10 w-24 md:w-20 rounded-md hover:scale-105 transform transition-transform ${localSelectedOption === option.name ? 'bg-primary-150' : 'bg-primary-50'} border-1px ${localSelectedOption === option.name ? 'border-primary-150' : 'border-primary-600'}`}
        onClick={() => {
          onFilterChange(filterType, option.name);
          setLocalSelectedOption(option.name);
        }}
      >
        <span
          className={`text-base font-greycliff font-semibold ${localSelectedOption === option.name ? 'text-primary-200' : 'text-primary-700'
            }`}
        >
          {option.name}
        </span>
      </button>
      ))}
    </div>
  );
}
