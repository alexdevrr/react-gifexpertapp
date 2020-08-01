import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {

        // Para prevenir el comportamiento por defecto del formulario (refresh)
        e.preventDefault();


        // Validación para que no inserte valores vacíos
        if (inputValue.trim().length > 2) {

            // Para añadir el string que tengamos en el value
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />

        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}