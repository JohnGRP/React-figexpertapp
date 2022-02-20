import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from './helpers/getGifd';

export const GifGrid = ( {category} ) => {

    // const [images, setImages] = useState([]);
    const {loading, data} = useFetchGifs( category );
    // console.log(loading);
    // console.log(data);





    return (
        <>
            <h3> { category } </h3>

            { loading && <p> Cargado!..</p> }

            <div className='card-grid'>
                {
                    data.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    );
};
