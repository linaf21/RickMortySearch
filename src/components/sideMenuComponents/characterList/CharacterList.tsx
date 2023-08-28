import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import { MCharacter } from '../../../models/CharacterModel';
import { CharacterInfo } from './CharacterInfo';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';

interface CharacterListProps {
  title: string;
  characterList: MCharacter[];
  isStarred: boolean;
  characterNumber: number;
}

export const CharacterList = ({ title, isStarred, characterList, characterNumber }: CharacterListProps) => {

  const [sortedAscending, setSortedAscending] = useState(true);

  const toggleSorting = () => {
    setSortedAscending(!sortedAscending);
  };

  const sortedCharacterList = [...characterList].sort((a, b) => {
    if (sortedAscending) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className={` ${isStarred ? 'pt-8' : 'pt-3'} ${isStarred ? 'pb-3' : 'pb-2'} px-2`}>
      {characterList.length > 0 && (
        <>
          <div className='flex justify-between items-center'>
            <span className='text-primary-500 px-4 text-xs font-greycliff font-semibold tracking-wider'>{title} ({characterNumber})</span>
            <button className='h-8 w-10 shadow hover:bg-primary-450 hover:scale-105 transform transition-transform' onClick={toggleSorting}>
              <SortByAlphaIcon className='text-primary-500' />
            </button>
          </div>

          {!isStarred && (
            <div className='w-full py-4'>
              <Divider className='bg-primary-600' />
            </div>
          )}
          {sortedCharacterList.map((character: MCharacter, index: number) => (
            <div key={index}>
              <CharacterInfo isStarred={isStarred!} character={character} />
              {!isStarred && index !== sortedCharacterList.length - 1 && (
                <Divider className='bg-primary-600' />
              )}
            </div>
          ))}
        </>
      )}

    </div>
  )
}
