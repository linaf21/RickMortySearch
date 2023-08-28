import { Divider } from "@mui/material";
import { MCharacter, MComments } from "../../../../models/CharacterModel";
import { CharacterSummary } from "./CharacterSummary";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { useContext, useState, useEffect } from "react";
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
  const [commentsList, setCommentsList] = useState<MComments[]>([])

  const { addStarredCharacter, removeStarredCharacter, addComentCharacter, characterState, setCharacters } = useContext(CharactersContext);

  const saveComment = () => {
    if (comment.trim() !== '') {
      addComentCharacter(character.id, comment);

      setComment('');

      setShowModal(false);
    }
  };
  useEffect(() => {
    const comments = characterState.commentsList.filter(comment => comment.idCharacter === character.id);
    setCommentsList(comments)
  }, [characterState.commentsList, character.id]);

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
          handleSaveComment={saveComment} />
      )}

      <div className='flex flex-col w-full'>
        <CharacterSummary title="Specie" text={character.species} />
        <Divider className='bg-primary-600' />
        <CharacterSummary title="Status" text={character.status} />
        <Divider className='bg-primary-600' />
        <CharacterSummary title="Gender" text={character.gender} />
      </div>

      {commentsList.length > 0 && (
        <div className="pt-3">
          <Divider className='bg-primary-600' />
          <div className="flex flex-wrap pt-2">
            <span className='text-primary-700 w-full text-base font-greycliff font-semibold'>Comments</span>

            <div className="flex flex-col w-full pt-3">
              {commentsList.map((comment: MComments, index: number) => (
                <div key={index}>
                  <span className="text-primary-500 text-base font-greycliff font-normal leading-6">{index+1}. {comment.comment}</span>
                  {index !== commentsList.length - 1 && (
                    <div className="py-2">
                      <Divider className='bg-primary-600 ' />
                    </div>
                  )}
                </div>
              ))}
            </div>


          </div>
        </div>



      )}

    </>
  )
}
