import React from 'react';

const Header = ({ name }) => (
  <header>
    <h1>{name.first} <span className="surname">{name.last}</span></h1>
    <p>Cirriculum Vitae</p>
  </header>
)


export default Header
