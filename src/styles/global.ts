import { createGlobalStyle } from 'styled-components'


import Agave from '../assets/fonts/Agave.otf'
import Metrica from '../assets/fonts/Metrica.otf'
import NumFont from '../assets/fonts/NumFont.ttf'


export default createGlobalStyle `

    @font-face {
        font-family: 'Agave';
        src: url( '${Agave}' );
    }
    @font-face {
        font-family: 'Metrica';
        src: url( '${Metrica}' );
    }
    @font-face {
        font-family: 'NumFont';
        src: url( '${NumFont}' );
    }

    :root {
        --ff-def: 'Agave';
        --ff-alt: 'Metrica';
        --ff-aux: 'NumFont';
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: var(--ff-def);
        background: #000;
        font-size: 12pt;
        color: #FFF;
    }

`;
