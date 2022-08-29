import React from 'react'
import logo from "../../logo.svg";
import { Link } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <Link to='/'>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Cat Wiki</h2>
      </header>
    </Link>
  )
}
