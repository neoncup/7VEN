import React from 'react'
import GlobalStyle from './styles/global'
import HeaderComponent from './components/header/headerComponent'
import CarouselComponent from './components/members/carouselComponent'

const App:React.FC = () => {

  return (
    <div className = "app">
        <HeaderComponent />
        <CarouselComponent />
        <GlobalStyle />
    </div>
  )
}

export default App
