import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const data = useParams()
    return (
        <div className='bg-cyan-50 h-[45vw] flex items-center justify-center w-full text-blue-950 font-[monument]'>
            <h1 className='text-[12vw]'>{data.name.toLocaleUpperCase()}</h1>
        </div>
    );
}

export default Details;
