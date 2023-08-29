import React, { useContext } from 'react';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import { MCharacter } from '../../../models/CharacterModel';
import CharactersContext from '../../../context/CharactersProvider';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
interface CharacterInfoProps {
    isStarred: boolean,
    character: MCharacter;
    onSoftDelete: (index: number) => void
    index: number;
}

export const CharacterInfo = ({
    isStarred,
    character,
    onSoftDelete,
    index
}: CharacterInfoProps) => {

    const { addStarredCharacter, removeStarredCharacter } = useContext(CharactersContext);

    return (
        <div className={`${!isStarred ? 'characterInfo' : 'characterStarredInfo'} items-center ${isStarred ? 'mt-4' : 'mt-0'} px-2 py-4 rounded-md ${isStarred ? 'bg-primary-150' : 'bg-primary-50'} w-full flex`}>
            <Link to={`characterDetail/${character.id}`} className="flex w-full">
                <img src={character.image} alt="circular image character" className="w-8 h-8 rounded-full object-cover mr-3" />
                <div className="flex flex-col">
                    <span className='text-primary-700 text-base font-greycliff font-semibold leading-none'>{character.name}</span>
                    <span className='text-primary-500 text-base font-greycliff font-normal leading-6'>{character.species}</span>
                </div>
            </Link>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center ${isStarred ? 'bg-primary-50' : ''}`}>
                {isStarred ? (
                    <button className='h-8 w-8' onClick={() => removeStarredCharacter(character.id)}>
                        <FavoriteRoundedIcon className='text-primary-300 h-6 w-6' />
                    </button>
                ) : (
                    <>
                        <button onClick={() => onSoftDelete(index)}>
                            <DeleteIcon className="text-primary-950 h-6" />
                        </button>
                        <button onClick={() => addStarredCharacter(character)}>
                            <FavoriteBorderTwoToneIcon className="text-primary-550 h-6" />
                        </button>
                    </>
                )}
            </div>
        </div>


    )
}
