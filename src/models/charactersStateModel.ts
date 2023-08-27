import { MCharacter, MComments } from "./CharacterModel";

export interface MCharactersState {
  characters: MCharacter[];
  starredCharacters: MCharacter[];
  commentsList: MComments[];
}
