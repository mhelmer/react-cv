import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../styles/icons.scss'
import '../styles/footer.scss'

const Phone = ({ number }) => (
  <div>
    <FontAwesome className='contact-icon' name='phone' size='lg' />
    <span className="contact-row">{ number }</span>
  </div>
)

const Email = ({ email }) => (
  <div>
    <FontAwesome className='contact-icon' name='envelope' size='lg' />
    <a className="contact-row" href={`mailto: ${email}`}>{ email }</a>
  </div>
)

const Address = ({ address, name }) => (
  <div className="contact-address">
    <FontAwesome className='contact-icon' name='home' size='lg' />
    <div className="contact-address-detail">
      <span className="contact-row">
        {`${name.first} ${name.last}`}
      </span>
      <span className="contact-row">
        {address.street1}
      </span>
      <span className="contact-row">
        {address.street2}
      </span>
      <span className="contact-row">
        {`${address.postCode} ${address.city}`}
      </span>
      <span className="contact-row">
        {address.country}
      </span>
    </div>
  </div>
)

const Footer = ({ contact }) => (
  <footer>
    { contact.email && (
      <div className="footer-section">
        <Email email={contact.email} />
      </div>
    ) }
    { (contact.name || contact.address) && (
      <div className="footer-section">
        <Address address={contact.address} name={contact.name} />
      </div>
    ) }
    { contact.phoneNumber && (
      <div className="footer-section">
        <Phone number={contact.phoneNumber} />
      </div>
    ) }
  </footer>
)

export default Footer