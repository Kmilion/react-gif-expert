import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    // Hook
    const [categories, setCategories] = useState(['League of Legends']);

    // Function
    const onAddCategory = (newCategory) => {
        if (categories.findIndex(item => newCategory.toLowerCase() === item.toLowerCase()) !== -1) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h3>GIF APP</h3>
            <br></br>
            {/* Cuidado acá porque no es un parámetro */}
            <AddCategory onNewCategory={event => onAddCategory(event)}></AddCategory>
            {/* <AddCategory onNewCategory={onAddCategory}></AddCategory> */}
            <br></br>
            {
                categories.map(category => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }
        </>
    );
};