import { Divider } from "@mui/material";
import { MCharacter } from "../../../../models/CharacterModel";
import { CharacterSummary } from "./CharacterSummary";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useContext, useState } from "react";
import CharactersContext from "../../../../context/CharactersProvider";
import { ModalComponent } from "../modal/ModalComponent";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface SummaryComponentProps {
  character: MCharacter;
  isStarred: boolean;
}

export const SummaryComponent = ({ character, isStarred }: SummaryComponentProps) => {

  const [showModal, setShowModal] = useState(false);
  const [comment, setComment] = useState('');

  const handleSaveComment = () => {
    console.log('Comment:', comment);

    setShowModal(false);
  };

  const { addStarredCharacter, removeStarredCharacter } = useContext(CharactersContext);

  return (
    <>
      <Link to="/" className="block md:hidden text-primary-700">
        <ArrowBackIcon className="text-primary-250 h-6 w-7 mb-5" />
      </Link>
      <div className="w-20 h-20 relative">
        <img src={character.image} alt="circular character image" className="w-full rounded-full h-full object-cover" />
        <div className={`absolute bottom-0 left-14 rounded-full h-8 w-8 flex items-center justify-center ${isStarred ? 'bg-primary-50' : ''}`}>
          {isStarred ? (
            <button onClick={() => removeStarredCharacter(character.id)}>
              <FavoriteRoundedIcon className="text-primary-300 h-6 w-7" />
            </button>
          ) : (
            <button onClick={() => addStarredCharacter(character)} className="bg-primary-50 h-8 w-8 rounded-full">
              <FavoriteBorderTwoToneIcon className="text-primary-550 h-6 w-7" />
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-wrap">
        <span className='text-primary-700 text-2xl font-greycliff font-bold mr-10 leading-10'>{character.name}</span>
        <button onClick={() => setShowModal(true)} className="bg-primary-150 h-10 w-36  rounded-md hover:scale-105 transform transition-transform">
          <span className='text-primary-500 text-base font-greycliff font-semibold'>Add comment</span>
        </button>
      </div>
      {showModal && (
        <ModalComponent
          setShowModal={setShowModal}
          showModal={showModal}
          comment={comment}
          setComment={setComment}
          handleSaveComment={handleSaveComment} />
      )}

      <div className='flex flex-col w-full'>
        <CharacterSummary title="Specie" text={character.species} />
        <Divider className='bg-primary-600' />
        <CharacterSummary title="Status" text={character.status} />
        <Divider className='bg-primary-600' />
        <CharacterSummary title="Gender" text={character.gender} />
      </div>
    </>
  )
}
