import React from 'react';

import Main from '../Main/main';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Link } from 'react-router-dom';

const Ships =() =>(
    <Main>
        <Header />
        <h1 >Shipssssss</h1>
        <Link to={'/'}>Home</Link>
        <Footer />
    </Main>

)

export default Ships