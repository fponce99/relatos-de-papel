import { Form } from 'react-bootstrap';
import '../styles/SearchBar.css'
import { useContext } from 'react'
import { SearchContext } from "../utils/context/SearchContext";

export const SearchBar = () => {
    const { search, setSearch } = useContext(SearchContext);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className='searchbar'>
            <Form.Control className='input' value={search} onChange={handleInputChange} placeholder='Autor, titulo...'/>
        </div>
    );
};