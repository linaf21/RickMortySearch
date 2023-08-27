import React from 'react'
import loadingImage from '../../assets/images/loadingImage.png';

export const LoadingComponent = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex justify-center items-center flex-col w-full h-full bg-black bg-opacity-50">
            <img src={loadingImage} alt="Icono de carga" className="animate-bounce h-56 w-56" />
            <p className="text-primary-700 font-greycliff font-semibold text-xl mt-4">Cargando</p>
        </div>
    )
}
