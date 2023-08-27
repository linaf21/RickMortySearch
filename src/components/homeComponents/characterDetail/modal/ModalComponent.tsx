import React, { useState } from 'react'

interface ModalComponentProps {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    comment: string;
    setComment: React.Dispatch<React.SetStateAction<string>>;
    handleSaveComment: () => void
}

export const ModalComponent = ({ setShowModal, showModal, comment, setComment, handleSaveComment }: ModalComponentProps) => {
    return (
        <div>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Add a comment to the character
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <textarea
                                className="w-full h-40 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter your comment..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="bg-primary-500 h-10 w-36 ml-10 rounded-md hover:scale-105 transform transition-transform"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                <span className='text-primary-150 text-base font-greycliff font-semibold'>Close</span>
                            </button>
                            <button
                                className="bg-primary-150 h-10 w-36 ml-10 rounded-md hover:scale-105 transform transition-transform"
                                type="button"
                                onClick={() => handleSaveComment()}
                            >
                                <span className='text-primary-500 text-base font-greycliff font-semibold'>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
    )
}
