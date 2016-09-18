import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import '../../styles/icons.scss'

const SocialSite = ({ social, details }) => (
  <a href={details.href}>
    <FontAwesome className='contact-icon' name={details.iconName} size='lg' />
    <span className="contact-row">
      { social.username }
    </span>
  </a>
)
SocialSite.propTypes = {
  social: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  details: PropTypes.shape({
    href: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
  }).isRequired,
}

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

Social.propTypes = {
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      siteName: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default Social
