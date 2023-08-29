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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Divider } from '@mui/material';
import { CharacterType, Gender, Specie, Status } from '../../utils/constants';

export const SideMenu = () => {

  const { setCharacters, characterState } = useContext(CharactersContext);
  const location = useLocation();
  const hideSideMenu = location.pathname.startsWith("/characterDetail");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    character: CharacterType.All,
    specie: Specie.All,
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

    if (selectedFilters.character == CharacterType.Others) {
      tempFilteredStarredCharacters = [];
    } else if (selectedFilters.character == CharacterType.Starred) {
      tempFilteredCharacters = [];
    }

    if (selectedFilters.specie !== Specie.All) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.species === selectedFilters.specie
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.species === selectedFilters.specie
      );
    }

    if (selectedFilters.gender == Gender.Male) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    } else if (selectedFilters.gender == Gender.Female) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    } else if (selectedFilters.gender == Gender.Unknown) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.gender === selectedFilters.gender
      );
    }

    if (selectedFilters.status == Status.Alive) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
    } else if (selectedFilters.status == Status.Dead) {
      tempFilteredCharacters = tempFilteredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
      tempFilteredStarredCharacters = tempFilteredStarredCharacters.filter(
        (character) => character.status === selectedFilters.status
      );
    } else if (selectedFilters.status == Status.Unknown) {
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
    if (selectedFilters.character !== CharacterType.All) {
      setIsFilterSelected(true);
      cont++;
    }
    if (selectedFilters.specie !== Specie.All) {
      setIsFilterSelected(true);
      cont++;
    }
    if (selectedFilters.gender === Gender.Male || selectedFilters.gender === Gender.Female || selectedFilters.gender === Gender.Unknown) {
      cont++;
      setIsFilterSelected(true);
    }
    if (selectedFilters.status === Status.Alive || selectedFilters.status === Status.Dead || selectedFilters.status === Status.Unknown) {
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
            className={`top-0 relative asideValues left-0 z-40 w-full md:w-96 md:relative ${showFilterModal ? "hidden md:flex" : "md:flex"} ${hideSideMenu ? "hidden md:flex" : loading ? "md:flex" : ""
              }`}
            aria-label="Sidebar"
          >
            <div className="h-full md:w-96 px-4 py-4 overflow-y-auto shadow">

              <div className='px-3 py-7'>
                <span className="text-primary-700 text-2xl font-greycliff font-extrabold">Rick and Morty list</span>
              </div>

              <SearchBar setShowFilterModal={setShowFilterModal} showFilterModal={showFilterModal} />

              {isFilterSelected && (
                <div className="md:hidden w-full flex justify-between py-6 px-5">
                  <button
                    onClick={() => setShowFilterModal(!showFilterModal)}
                    className="md:hidden text-primary-700 flex flex-wrap w-1/5"
                  >
                    <ArrowBackIcon className="text-primary-250 h-6 w-5 mb-5" />
                  </button>
                  <div className='w-7/10'>
                    <span className="text-primary-700 text-base font-greycliff font-extrabold">Advanced search</span>
                  </div>

                  <div className='w-1/6'>
                    <button
                      onClick={() => setShowFilterModal(!showFilterModal)}
                      className="md:hidden text-primary-700 flex flex-wrap w-1/5"
                    >
                      <span className="text-primary-250 text-base font-greycliff font-extrabold w-9/10">Done</span>
                    </button>
                  </div>
                </div>
              )}

              {isFilterSelected && (
                <div className='px-2 md:pt-4'>
                  <Divider className='bg-primary-600 md:hidden flex' />
                  <div className='flex w-full flex-wrap justify-between py-4 px-5 '>
                    <span className='text-primary-800 text-base font-greycliff font-semibold leading-none'>{filteredCharacters.length + filteredStarredCharacters.length} {(filteredCharacters.length + filteredStarredCharacters.length) > 1 ? "Results" : "Result"}</span>
                    <div className={`h-6 ${totalFilters > 1 ? "w-20" : "w-16"} rounded-2xl bg-primary-900 items-center justify-center flex`}>
                      <span className='text-primary-350 text-base font-greycliff font-semibold leading-none'>{totalFilters} {totalFilters > 1 ? "Filters" : "Filter"}</span>
                    </div>
                  </div>
                  <Divider className='bg-primary-600 md:hidden flex' />
                </div>

              )}
              {filteredStarredCharacters.length > 0 && (
                <CharacterList title='STARRED CHARACTERS' characterList={filteredStarredCharacters} isStarred={true} characterNumber={starredNumber} />
              )}
              {filteredCharacters.length > 0 && (
                <CharacterList setCharactersNumber={setCharactersNumber} title='CHARACTERS' characterList={filteredCharacters} isStarred={false} characterNumber={charactersNumber} />

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
