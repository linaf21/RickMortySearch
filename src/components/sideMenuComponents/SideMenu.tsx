import React, { useContext, useEffect, useState } from 'react'
import { SearchBar } from './searchBar/SearchBar'
import { CharacterList } from './characterList/CharacterList'
import CharactersContext from '../../context/CharactersProvider';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { LoadingComponent } from '../loading/LoadingComponent';
import { useLocation } from 'react-router';
import { FilterComponent } from './filter/FilterComponent';
import { MCharacter } from '../../models/CharacterModel';

export const SideMenu = () => {

  const { setCharacters, characterState } = useContext(CharactersContext);
  const location = useLocation();
  const hideSideMenu = location.pathname.startsWith("/characterDetail");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    character: 'All',
    specie: 'All',
    gender: '',
    status: '',
  });
  const [filteredCharacters, setFilteredCharacters] = useState<MCharacter[]>([]);
  const [filteredStarredCharacters, setFilteredStarredCharacters] = useState<MCharacter[]>([]);
  const [totalFilters, setTotalFilters] = useState(0);
  const [isFilterSelected, setIsFilterSelected] = useState(false);

  const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        species
        image
        status
        gender
      }
    }
  }
`;

  const { loading, data } = useQuery(CHARACTERS_QUERY);

  const [charactersNumber, setCharactersNumber] = useState(0);
  const [starredNumber, setStarredNumber] = useState(0);

  useEffect(() => {
    setCharactersNumber(characterState.characters.length);
    setStarredNumber(characterState.starredCharacters.length);

  }, [selectedFilters, characterState.characters, characterState.starredCharacters]);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results);
      setFilteredCharacters(data.characters.results);
    }
  }, [data]);

  useEffect(() => {
    let tempFilteredCharacters = [...characterState.characters];
    let tempFilteredStarredCharacters = [...characterState.starredCharacters];

    if (selectedFilters.character == "Others") {
      tempFilteredStarredCharacters = [];
    } else if (selectedFilters.character == 'Starred') {
      tempFilteredCharacters = [];
    }

    if (selectedFilters.specie !== "All") {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.species === selectedFilters.specie
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.species === selectedFilters.specie
      );
    }

    if (selectedFilters.gender == "Male") {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    } else if (selectedFilters.gender == 'Female') {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    } else if (selectedFilters.gender == 'Unknown') {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    }

    if (selectedFilters.status == "Alive") {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
    } else if (selectedFilters.status == 'Dead') {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
    } else if (selectedFilters.status == 'Unknown') {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
    }

    setFilteredCharacters(tempFilteredCharacters);
    setFilteredStarredCharacters(tempFilteredStarredCharacters);
    setTotalFilters(filteredCharacters.length + filteredStarredCharacters.length)
  }, [selectedFilters, characterState.characters, characterState.starredCharacters]);

  useEffect(() => {
    let cont: number = 0;
    if (selectedFilters.character !== "All") {
      setIsFilterSelected(true);
      cont++;
    }
    if (selectedFilters.specie !== "All") {
      setIsFilterSelected(true);
      cont++;
    }
    if (selectedFilters.gender === "Male" || selectedFilters.gender === "Female" || selectedFilters.gender === "Unknown") {
      cont++;
      setIsFilterSelected(true);
    }
    if (selectedFilters.status === "Alive" || selectedFilters.status === "Dead" || selectedFilters.status === "Unknown") {
      cont++;
      setIsFilterSelected(true);
    }
    setTotalFilters(cont);
  }, [selectedFilters]);



  return (
    <>
      {loading ? (<LoadingComponent />) : (
        <>
          <aside
            id="default-sidebar"
            className={`top-0 relative left-0 z-40 w-full h-screen md:w-96 md:h-auto md:relative ${showFilterModal ? "hidden md:flex" : "md:flex"} ${hideSideMenu ? "hidden md:flex" : loading ? "md:flex" : ""
              }`}
            aria-label="Sidebar"
          >
            <div className="h-full w-96 px-4 py-4 overflow-y-auto shadow">
              <div className='px-3 py-7'>
                <span className="text-primary-700 text-2xl font-greycliff font-extrabold">Rick and Morty list</span>
              </div>
              <SearchBar setShowFilterModal={setShowFilterModal} showFilterModal={showFilterModal} />
              {isFilterSelected && (
                <div className='flex w-full flex-wrap justify-between py-6 px-5 '>
                  <span className='text-primary-800 text-base font-greycliff font-semibold leading-none'>{filteredCharacters.length + filteredStarredCharacters.length} {(filteredCharacters.length + filteredStarredCharacters.length) > 1 ? "Results" : "Result"}</span>
                  <div className={`h-6 ${totalFilters > 1 ? "w-20" : "w-16"} rounded-2xl bg-primary-900 items-center justify-center flex`}>
                    <span className='text-primary-350 text-base font-greycliff font-semibold leading-none'>{totalFilters} {totalFilters > 1 ? "Filters" : "Filter"}</span>
                  </div>
                </div>
              )}
              {filteredStarredCharacters.length > 0 && (
                <CharacterList title='STARRED CHARACTERS' characterList={filteredStarredCharacters} isStarred={true} characterNumber={starredNumber} />

              )}
              {filteredCharacters.length > 0 && (
                <CharacterList title='CHARACTERS' characterList={filteredCharacters} isStarred={false} characterNumber={charactersNumber} />

              )}
            </div>
          </aside>
          {showFilterModal && <FilterComponent
            showFilterModal={showFilterModal}
            setShowFilterModal={setShowFilterModal}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
            isFilterSelected={isFilterSelected}
          />}

        </>
      )}
    </>

  )
}
