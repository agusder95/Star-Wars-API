
import './styles.js'
import { Boton } from './styles'

import React from 'react';

const Button = ({ functionValue, text }) => (
    <Boton onClick={functionValue}>{ text }</Boton>
)

export default Button
