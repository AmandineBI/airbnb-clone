import React from 'react';
import logo from '../images/img.png'

export default function Navbar() {
  return (
    <nav>
        <img src={logo} className="nav--logo" />
    </nav>
  );
}
