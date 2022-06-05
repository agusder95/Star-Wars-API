import React, { useContext, useState } from 'react';
import './styles'
import { BodyContainer } from './styles';
import Boton  from '../Button/button'
import { Link } from 'react-router-dom';

import StateContext from '../../context/StateContext';

const Body =() => {

    const [status, setStatus] = useContext(StateContext)

    console.log(status)
    return(
        <BodyContainer> 
            <Link to={'characters'}> 
                <Boton /* functionValue={setStatus = 'people'} */ text='Personajes' />
            </Link>
            
            <Link to={'worlds'}> 
                <Boton text='Planetas' />
            </Link>

            <Link to={'ships'}> 
                <Boton text='Naves' />
            </Link>
            
        </BodyContainer>
    )

}

export default Body;