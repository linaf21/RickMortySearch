import React, { useContext, useState } from 'react'
import { FilterType } from '../filterType/FilterType'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


interface FilterProps {
  showFilterModal: boolean;
  setShowFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFilters: {
    character: string;
    specie: string;
    gender: string;
    status: string;
  };
  setSelectedFilters: React.Dispatch<React.SetStateAction<{
    character: string;
    specie: string;
    gender: string;
    status: string;
  }>>
  isFilterSelected: boolean;
}
export const FilterComponent = ({ showFilterModal,
  setShowFilterModal,
  selectedFilters,
  setSelectedFilters,
  isFilterSelected }: FilterProps) => {

  const [localSelectedFilters, setLocalSelectedFilters] = useState({
    character: selectedFilters.character,
    specie: selectedFilters.specie,
    gender: selectedFilters.gender,
    status: selectedFilters.status,
  });

  const handleFilterChange = (filterType: any, value: any) => {
    setLocalSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: value,
    }));
  };

  const applyFilters = () => {
    setSelectedFilters(localSelectedFilters);
    setShowFilterModal(false);
  };

  const cleanFilters = () => {
    setSelectedFilters({
      character: "All",
      specie: "All",
      gender: "",
      status: "",
    });
    setShowFilterModal(false);
  };

  return (
    <div className="flex flex-wrap w-full h-full items-stretch justify-start px-5 py-5 md:flex-row md:items-center">
      <div className="md:hidden w-full flex justify-center">
        <button
          onClick={() => setShowFilterModal(!showFilterModal)}
          className="md:hidden text-primary-700 flex flex-wrap w-1/2"
        >
          <ArrowBackIcon className="text-primary-250 h-6 w-7 mb-5" />
        </button>
        <span className="text-primary-700 text-xl font-greycliff font-extrabold w-7/10">Filters</span>
      </div>
      <div
        className={`md:absolute md:top-32 w-full md:w-358 md:left-4 transform translate-y-2 filter-modal ${showFilterModal ? 'filter-modal-open' : ''
          }`}
      >
        <div className="relative md:my-6 md:w-full border-0 md:rounded-lg md:shadow-lg flex flex-col md:h-full bg-white outline-none focus:outline-none px-5 justify-center  overflow-x-hidden overflow-y-auto z-50">
          <div className='mt-7 md:mt-0'>
            <FilterType
              filterType="character"
              options={[
                { name: "All" },
                { name: "Starred" },
                { name: "Others" },
              ]}
              selectedFilter={selectedFilters.character}
              onFilterChange={handleFilterChange}
            />
            <div className="py-3">
              <FilterType
                filterType="specie"
                options={[
                  { name: "All" },
                  { name: "Human" },
                  { name: "Alien" },
                ]}
                selectedFilter={selectedFilters.specie}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="py-3">
              <FilterType
                filterType="gender"
                options={[
                  { name: "Male" },
                  { name: "Female" },
                  { name: "Unknown" },
                ]}
                selectedFilter={selectedFilters.specie}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="py-3">
              <FilterType
                filterType="status"
                options={[
                  { name: "Alive" },
                  { name: "Dead" },
                  { name: "Unknown" },
                ]}
                selectedFilter={selectedFilters.specie}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>
          <button onClick={applyFilters} className={`${isFilterSelected ? "bg-primary-200" : "bg-primary-450"} h-10 w-full my-2 rounded-md hover:scale-105 transform transition-transform`}>
            <span className={`${isFilterSelected ? "text-primary-50" : "text-primary-500"}  text-base font-greycliff font-semibold`}>Filter</span>
          </button>
          {isFilterSelected && (
            <button onClick={cleanFilters} className="bg-primary-450 h-10 w-full mb-2 rounded-md hover:scale-105 transform transition-transform">
              <span className="text-primary-500 text-base font-greycliff font-semibold">Clean filters</span>
            </button>
          )}
        </div>
      </div>
    </div>

  )
}
