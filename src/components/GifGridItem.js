import React from 'react';

export const GifGridItem = ( { title, url } ) => {
    // console.log({title, url} );
    return (
        <div className='card animate__animated animate__bounce animate__delay-2s'>
            <img src= {url} alt={title} />
            <p> <b> { title } </b> </p>
        </div>
    );
};
