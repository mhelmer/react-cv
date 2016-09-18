import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../styles/icons.scss'


const Footer = ({ contact: { email } }) => (
  <footer>
    <FontAwesome className='contact-icon' name='envelope' size='lg' />
    E-mail: <a href={`mailto: ${email}`}>{ email }</a>
  </footer>
)

export default Footer
