import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <nav class="navbar navbar-default mt">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="">
            <img alt="Brand" src={logo}/>
          </a>
        </div>
      </div>
    </nav>
  )
}
