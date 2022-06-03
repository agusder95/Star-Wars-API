
import baner from '../../images/Star_Wars_Logo.svg.png'

import './styles'
import { HeaderContainer, Img, Contenedor, H1 } from './styles';

const Header = () => (
    <HeaderContainer>
        <Contenedor>
            <Img src={baner} className="App-baner" alt="baner" />
        </Contenedor>
        <H1>Guia completa</H1>
    </HeaderContainer>
)

export default Header;