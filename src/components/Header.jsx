import React from 'react'
import Logo from '../assets/Usher.webp'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt=" logo imagem Usher e Alicia" />
      <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header