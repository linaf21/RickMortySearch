import { MCharacter, MComments } from "../models/CharacterModel";
import { MCharactersState } from "../models/charactersStateModel";

type CharacterAction =
    | { type: 'setCharacters', payload: MCharacter[] }
    | { type: 'addStarredCharacter', payload: MCharacter }
    | { type: 'removeStarredCharacter', payload: number }
    | { type: 'softRemoveCharacter', payload: number }
    | { type: 'addComentCharacter', payload: MComments }

export const characterReducer = (state: MCharactersState, action: CharacterAction): MCharactersState => {

    switch (action.type) {
        case 'setCharacters':
            return {
                ...state,
                characters: action.payload
            };

        case 'addStarredCharacter':

            const newList = [...state.starredCharacters];
            const characterToAdd = action.payload;

            const isCharacterAlreadyStarred = newList.some(character => character.id === characterToAdd.id);

            if (!isCharacterAlreadyStarred) {
                newList.push(characterToAdd);

                let newCharactersList = [...state.characters];
                newCharactersList = newCharactersList.filter(character => character.id !== characterToAdd.id);

                return {
                    ...state,
                    characters: newCharactersList,
                    starredCharacters: newList
                };
            } else {
                return state; 
            }

        case 'removeStarredCharacter':
            let newRemoveList = [...state.starredCharacters];
            const character: MCharacter = newRemoveList.find(character => character.id == action.payload)!;
            newRemoveList = newRemoveList.filter(character => character.id != action.payload);

            const newCharacterList = [...state.characters];
            newCharacterList.push(character);
            return {
                ...state,
                characters: newCharacterList,
                starredCharacters: newRemoveList,
            };
        // case 'softRemoveCharacter':
        //     let newRemoveList = [...state.starredCharacters];
        //     newRemoveList = newRemoveList.filter(character => character.id != action.payload)
        //     return {
        //         ...state,
        //         username: action.payload,
        //     };

        case 'addComentCharacter':
            const newCommentList = [...state.commentsList];
            newCommentList.push(action.payload);
            return {
                ...state,
                commentsList: newCommentList
            };
        default:
            return state;
    }
}