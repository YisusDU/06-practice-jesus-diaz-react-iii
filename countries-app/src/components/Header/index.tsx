import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    return (
        <header>
            <h1>Countries App</h1>
            <nav>
                <Link className='link' to="/">Home</Link>  <Link className='link' to="/continents">See for each continent</Link>
            </nav>
        </header>
    )
};
export default Header;