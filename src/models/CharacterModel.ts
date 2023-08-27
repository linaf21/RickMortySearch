import { MCharactersState } from "./charactersStateModel";

export interface MCharacter {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
}

export interface MCharacterContextType {
  setCharacters: any;
  addStarredCharacter: any;
  removeStarredCharacter: any;
  // softRemoveCharacter: any;
  addComentCharacter: any;
  characterState: MCharactersState;
}

export interface MComments {
  idCharacter: number;
  comments: string[];
}
