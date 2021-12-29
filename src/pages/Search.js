import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/data/data';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Search = () => {

    const {input} = useParams();

    const search = input.toLowerCase();

    const booksBySearch = products.filter(book => (
        book.title.toLowerCase().includes(search) || 
        book.author.toLowerCase().includes(search) || 
        book.desc.some(desc => desc.toLowerCase().includes(search)) ||
        book.categories.some(c => c.toLowerCase(). includes(search))
    )); 

    return (
        <ItemListContainer title={`Search: ${input}`} prod={booksBySearch} />
    )
}

export default Search
