import { createContext, useReducer } from 'react';
import { MCharacter, MCharacterContextType, MComments } from '../models/CharacterModel';
import { characterReducer } from './CharactersReducer';
import { MCharactersState } from '../models/charactersStateModel';

const CharactersContext = createContext({} as MCharacterContextType);

const initialState: MCharactersState = {
  characters: [],
  starredCharacters: [],
  commentsList: []
}

export const CharacterProvider = ({ children }: any) => {


  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const setCharacters = (newCharacterList: MCharacter[]) => {
    dispatch({ type: 'setCharacters', payload: newCharacterList });
  }
  const addStarredCharacter = (newCharacter: MCharacter) => {
    dispatch({ type: 'addStarredCharacter', payload: newCharacter });
  }
  const removeStarredCharacter = (idCharacter: number) => {
    dispatch({ type: 'removeStarredCharacter', payload: idCharacter });
  }
  const addComentCharacter = (newComments: MComments) => {
    dispatch({ type: 'addComentCharacter', payload: newComments });
  }

  return (
    <CharactersContext.Provider value={{
      setCharacters,
      addStarredCharacter,
      removeStarredCharacter,
      addComentCharacter,
      characterState
    }}>
      {children}
    </CharactersContext.Provider>
  )
}


export default CharactersContext;