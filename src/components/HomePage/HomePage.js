import React from 'react';
import './HomePage.css';
// import pdf1 from "../../DataFile/pagePdf1.pdf";

const HomePage = () => {
    
    return (
        <div>
            <h1 className='title'>Documents {pdf1.lenght}</h1>
            <div className='container'>
                <a className='page' href="">- Simple Document 1.pdf</a>
                <a className='page' href="">- Simple Document 2.pdf</a>
                <a className='page' href="">- Simple Document 3.pdf</a>
            </div>
        </div>
    );
};

export default HomePage;