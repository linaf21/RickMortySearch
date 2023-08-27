import React from 'react';

interface Option {
  name: string;
}

interface FilterTypeProps {
  filterType: string;
  options: Option[];
}

export const FilterType = ({ filterType, options }: FilterTypeProps) => {
  return (
    <div className='w-full flex flex-wrap justify-between'>
      <span className='text-primary-500 text-base font-greycliff font-normal w-full'>{filterType}</span>
      {options.map((option, index) => (
        <button key={index} className="md:mt-0 mt-2 bg-primary-150 h-10 w-24 md:w-20 rounded-md hover:scale-105 transform transition-transform">
          <span className='text-primary-200 text-base font-greycliff font-semibold'>{option.name}</span>
        </button>
      ))}
    </div>
  )
}
