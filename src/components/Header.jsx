import { Image } from 'react-bootstrap'
import { SearchBar } from "./searchBar";
import { CgProfile } from "react-icons/cg";
import '../styles/Header.css'

export const Header = () => {
    return (
        <div className='Header'>
            <Image src='src/assets/logo.png' alt='logo' width={'100px'}/>
            <SearchBar></SearchBar>
            <CgProfile className='profile-icon'/>
        </div>
    );
};
