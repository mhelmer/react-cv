import React from 'react'


const Footer = ({ contact: { email } }) => (
  <footer>
    E-mail: <a href={`mailto: ${email}`}>{ email }</a>
  </footer>
)

export default Footer
