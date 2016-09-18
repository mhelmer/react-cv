import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../../styles/icons.scss'

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

export default Social
