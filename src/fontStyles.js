import { createGlobalStyle } from "styled-components";

import Starjedi from './Fonts/Starjedi.ttf'

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'StarWars';
        src: url(${Starjedi}) format('truetype');;
    }
`

export default FontStyles