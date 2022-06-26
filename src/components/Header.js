// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = () => {
    return (
        <header>
            <h1 className='title'>Call a Friend</h1>
            <p className='subtitle'>your friendly contact app</p>
            <hr/>
        </header>
    )
}

export default Header;