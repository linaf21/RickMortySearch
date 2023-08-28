import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router"
import CharactersContext from "../../../context/CharactersProvider";
import { MCharacter } from "../../../models/CharacterModel";
import { SummaryComponent } from "./summary/SummaryComponent";

export const CharacterDetail = () => {
  const { idCharacter } = useParams();

  const { characterState, } = useContext(CharactersContext);

  const [character, setCharacter] = useState<MCharacter>();
  const [isStarred, setIsStarred] = useState(false);

  useEffect(() => {
    const indexSelectedCharacter = characterState.characters.findIndex(character => character.id == Number(idCharacter));

    if (indexSelectedCharacter != -1) {
      setCharacter(characterState.characters[indexSelectedCharacter]);
      setIsStarred(false);
    } else {
      const starredCharacter = characterState.starredCharacters.find(character => character.id == Number(idCharacter));
      setCharacter(starredCharacter);
      setIsStarred(true);
    }

  }, [idCharacter, characterState]);

  return (
    <div className='w-full md:w-49/100 px-10 py-5 md:px-20 md:py-14'>
      {character && (
        <SummaryComponent
          character={character}
          isStarred={isStarred} />
      )}
    </div>

  )
}
