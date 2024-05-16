import React from 'react'
import { Header } from './styled'

const HeaderComponent: React.FC = () => {
    return(
        <Header>
            <span className = "link">membros</span>
            <span className = "link">projectos</span>
            <span className = "link">discover</span>
        </Header>
    )
}

export default HeaderComponent;
