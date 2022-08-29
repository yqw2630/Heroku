import React from 'react'
import logo from "../../logo.svg";
import './Loading.css'

export default function Loading () {
  return (
    <div className="loading-page">
        <div className="loading-container">
            <img src={logo} className="loading-logo" alt="logo" />
            <p><b>Loading...</b></p>
      </div>
    </div>
  )
}