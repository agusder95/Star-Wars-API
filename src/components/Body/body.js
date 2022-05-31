import React from 'react';
import './styles'
import { BodyContainer } from './styles';
import Boton  from '../Button/button'

const Body =() => (

    <BodyContainer>
        <Boton text='Personajes' />
        <Boton text='Planetas' />
        <Boton text='Naves' />
    </BodyContainer>

)

export default Body;