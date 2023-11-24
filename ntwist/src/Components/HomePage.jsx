import React from 'react';
import { Navbar } from './Navbar';

import '../Styles/HomePage.css'

export const HomePage = () => {
    return (
        <div className='container'>

            <div><Navbar /></div>
            <div className='innercontainer'>
                    <div className="mainpage">
                        <div className="left">
                            <h1>Data-powered solution for Industrial Excellence</h1>
                            <div>
                                <button>Read More</button>
                            </div>
                        </div >
                        <div className="right">
                            <img src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                        </div>
                    </div>
            </div>
        </div>
    )
}

