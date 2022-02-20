import React, { useState } from 'react';
import PropTypes from "prop-types";



export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = ( e ) => {
        // console.log( e.target.value );
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2){
            // console.log( e );
            
            setCategories( cats => [inputValue, ...cats] )
            setInputValue('');
        }


    }

    return (
        <>
            <h2>
                <form onSubmit={ handleSubmit }>
                    <input
                        type="text"
                        value={ inputValue }
                        onChange={ handleInputValue }
                        
                    /> 
                </form>
            </h2>
        </>
    );
};

AddCategory.propTypes = {
    setCategories :PropTypes.func.isRequired
}