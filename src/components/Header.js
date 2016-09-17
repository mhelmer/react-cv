import React from 'react';

const Header = ({ name }) => (
  <header>
    <h1><span className="first-name">{name.first} </span>{name.last}</h1>
    <p>Cirriculum Vitae</p>
  </header>
)


export default Header
