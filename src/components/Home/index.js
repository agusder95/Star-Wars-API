import React from 'react';

import Body from '../Body/body';
import Header from '../Header/header';
import Main from '../Main/main';
import Footer from '../Footer/footer'
import Api from '../../context/apiContent';

const Home = () => (
    <Main>
        <Header />
        <Body />
        <Api></Api>
        <Footer />
    </Main>
)
        
export default Home