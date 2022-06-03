import React from 'react';

import Header from '../Header/header';
import Footer from '../Footer/footer'
import Main from '../Main/main';
import { Link } from 'react-router-dom';

const Worlds =() =>(

    <Main>
        <Header />
        <h1 >Whorldsssssss</h1>
        <Link to={'/'}>Home</Link>
        <Footer />
    </Main>
)



export default Worlds