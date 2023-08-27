interface CharacterSummaryProps {
    title: string;
    text: string;
}

export const CharacterSummary = ({ title, text }: CharacterSummaryProps) => {
    return (
        <div className='flex flex-col py-3'>
            <span className='text-primary-700 text-base font-greycliff font-bold leading-6'>{title}</span>
            <span className='text-primary-500 text-base font-greycliff font-normal leading-6'>{text}</span>
        </div>
    )
}
