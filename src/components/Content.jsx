import books from '../data/books.json';
import CardBook from './CardBook'
import '../styles/Content.css'
import { useEffect, useState } from 'react';
import { useContext } from 'react'
import { SearchContext } from "../utils/context/SearchContext";
import { ProductSelectedContext } from '../utils/context/ProductSelectedContext';
import Modal from './Modal'

const Content = () => {
    const [ booksResult, setBooksResult ] = useState(books)
    const { search } = useContext(SearchContext);
    const {
        isOpen
      } = useContext(ProductSelectedContext);

    useEffect( () => {
        const booksFiltered = booksResult.filter(book => book.title.startsWith(search))
        setBooksResult(booksFiltered)
        if (search === '') {
            setBooksResult(books)
        }
    }, [search])
    return (
        <div className='content'>
            <div className='result'>
                {booksResult.map((book, index) => {
                    return (
                        <CardBook
                            key={index}
                            id={book.id}
                            title={book.title}
                            author={book.author}
                            genre={book.genre}
                            price={book.price}
                            description={book.description}
                            rating={book.rating}
                            image={book.image}
                        />
                    );
                })}
            </div>
            {isOpen && <Modal />}
        </div>
    );
};

export { Content }