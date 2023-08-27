import React, { useContext, useEffect, useState } from 'react'
import { SearchBar } from './searchBar/SearchBar'
import { CharacterList } from './characterList/CharacterList'
import CharactersContext from '../../context/CharactersProvider';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { LoadingComponent } from '../loading/LoadingComponent';
import { useLocation } from 'react-router';
import { FilterComponent } from './filter/FilterComponent';

export const SideMenu = () => {

  const { setCharacters, characterState } = useContext(CharactersContext);
  const location = useLocation();
  const hideSideMenu = location.pathname.startsWith("/characterDetail");
  const [showFilterModal, setShowFilterModal] = useState(false);

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

  }, [characterState.characters, characterState.starredCharacters]);

  useEffect(() => {
    if (data) {
      setCharacters(data.characters.results)
    }

  }, [data]);

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
              <CharacterList title='STARRED CHARACTERS' characterList={characterState.starredCharacters} isStarred={true} characterNumber={starredNumber} />
              <CharacterList title='CHARACTERS' characterList={characterState.characters} isStarred={false} characterNumber={charactersNumber} />
            </div>
          </aside>
          {showFilterModal && <FilterComponent showFilterModal={showFilterModal} setShowFilterModal={setShowFilterModal} />}

        </>
      )}
    </>

  )
}
