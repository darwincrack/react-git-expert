import { useState } from 'react'
export const AddCategory = ({OnNewCategory}) => {

    const [inputValue, setInputValue] = useState('prueba');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //setCategories(categories=>[inputValue,...categories]);

        OnNewCategory(inputValue.trim());
        setInputValue('');

    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />

        </form>

    )
}