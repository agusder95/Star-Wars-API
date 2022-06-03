import React from 'react';
import './styles'
import { BodyContainer } from './styles';
import Boton  from '../Button/button'
import { Link } from 'react-router-dom';

const Body =() => (



    <BodyContainer> 
        <Link to={'characters'}> 
            <Boton text='Personajes' />
        </Link>
        
        <Link to={'worlds'}> 
            <Boton text='Planetas' />
        </Link>

        <Link to={'ships'}> 
            <Boton text='Naves' />
        </Link>
        
    </BodyContainer>

)

export default Body;