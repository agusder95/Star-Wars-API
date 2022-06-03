import React from 'react';

import Main from '../Main/main';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';

const Character = () =>(
    <Main>
        <Header />
        <h1 >Holaaaaaaaaaaa</h1>
        <Link to={'/'}> Home </Link>
        <Footer />
    </Main>
)

export default Character