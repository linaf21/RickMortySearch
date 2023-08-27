import React from 'react'
import { FilterType } from '../filterType/FilterType'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface FilterProps {
  showFilterModal: boolean;
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const FilterComponent = ({ showFilterModal, setShowFilterModal }: FilterProps) => {
  return (
    <div className="flex flex-wrap w-full h-full items-stretch justify-start px-5 py-5 md:flex-row md:items-center">
      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowFilterModal(!showFilterModal)}
          className="md:hidden text-primary-700 flex flex-wrap w-1/2"
        >
          <ArrowBackIcon className="text-primary-250 h-6 w-7 mb-5" />
        </button>
        <span className="text-primary-700 text-xl font-greycliff font-extrabold w-7/10">Filters</span>
      </div>
      <div 
        className={`md:absolute md:top-32 w-full md:w-358 md:left-4 transform translate-y-2 filter-modal ${
          showFilterModal ? 'filter-modal-open' : ''
        }`}
      >
        <div className="relative md:my-6 md:w-full border-0 md:rounded-lg md:shadow-lg flex flex-col md:h-full bg-white outline-none focus:outline-none px-5 justify-center  overflow-x-hidden overflow-y-auto z-50">
          <div className='mt-7 md:mt-0'>
            <FilterType
              filterType="Character"
              options={[
                { name: "All" },
                { name: "Starred" },
                { name: "Others" },
              ]}
            />
            <div className="py-3">
              <FilterType
                filterType="Specie"
                options={[
                  { name: "All" },
                  { name: "Human" },
                  { name: "Alien" },
                ]}
              />
            </div>
            <div className="py-3">
              <FilterType
                filterType="Gender"
                options={[
                  { name: "Male" },
                  { name: "Femenale" },
                  { name: "Unknown" },
                ]}
              />
            </div>
            <div className="py-3">
              <FilterType
                filterType="Status"
                options={[
                  { name: "Alive" },
                  { name: "Dead" },
                  { name: "Unknown" },
                ]}
              />
            </div>
          </div>
          <button className="bg-primary-150 h-10 w-full my-5 rounded-md hover:scale-105 transform transition-transform">
            <span className="text-primary-500 text-base font-greycliff font-semibold">Filter</span>
          </button>
        </div>
      </div>
    </div>

  )
}
