import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import '../../styles/icons.scss'
import '../../styles/footer.scss'
import Social from './Social'

const Email = ({ email }) => (
  <div>
    <FontAwesome className='contact-icon' name='envelope' size='lg' />
    <a className="contact-row" href={`mailto: ${email}`}>{ email }</a>
  </div>
)
Email.propTypes = {
  email: PropTypes.string.isRequired,
}

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
Address.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }).isRequired,
  address: PropTypes.shape({
    street1: PropTypes.string,
    street2: PropTypes.string,
    postCode: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
}

const Phone = ({ number }) => (
  <div>
    <FontAwesome className='contact-icon' name='phone' size='lg' />
    <span className="contact-row">{ number }</span>
  </div>
)
Phone.propTypes = {
  number: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
}

const Mobile = ({ number }) => (
  <div>
    <FontAwesome className='contact-icon' name='mobile' size='lg' />
    <span className="contact-row">{ number }</span>
  </div>
)
Mobile.propTypes = Phone.propsTypes

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
    { contact.mobileNumber && (
      <div className="footer-section">
        <Mobile number={contact.mobileNumber} />
      </div>
    ) }
    { contact.phoneNumber && (
      <div className="footer-section">
        <Phone number={contact.phoneNumber} />
      </div>
    ) }
    { contact.social && <Social socialMedia={contact.social} /> }
  </footer>
)

Footer.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Footer
