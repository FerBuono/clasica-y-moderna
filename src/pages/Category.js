import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { products, topCategories } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Category = () => {

    const {categoryId} = useParams();

    const category = topCategories.find(category => category.id === Number(categoryId)).category;

    const booksByCategory = products.filter(book => book.categories.includes(category));

    return (
        <>
            <ItemListContainer title={`Category: ${category}`} prod={booksByCategory}/>
        </>
    )
}

export default Category
