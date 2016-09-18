import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../../styles/icons.scss'
import '../../styles/footer.scss'

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
const Phone = ({ number }) => (
  <div>
    <FontAwesome className='contact-icon' name='phone' size='lg' />
    <span className="contact-row">{ number }</span>
  </div>
)

const Mobile = ({ number }) => (
  <div>
    <FontAwesome className='contact-icon' name='mobile' size='lg' />
    <span className="contact-row">{ number }</span>
  </div>
)

const SocialSite = ({ social, details }) => (
  <a href={details.href}>
    <FontAwesome className='contact-icon' name='question' size='lg' />
    <span className="contact-row">
      { social.username }
    </span>
  </a>
)

const mapSocialToDetails = site => ({
  href: '#',
  iconName: 'question'
})

const Social = ({ socialMedia }) => (
  <div className="footer-section">
    { socialMedia.map(social => (
      <SocialSite key={social.siteName} social={social} details={mapSocialToDetails(social)} />
    ) ) }
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

export default Footer
