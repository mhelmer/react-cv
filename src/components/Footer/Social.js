import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import '../../styles/icons.scss'

const SocialSite = ({ social, details }) => (
  <a href={details.href} className="contact-row">
    <FontAwesome className='contact-icon' name={details.iconName} size='lg' />
    <span>
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

const mapSocialToDetails = site => {
  switch (site.siteName) {
    case 'github':
      return {
        href: `https://github.com/${site.username}`,
        iconName: 'github',
      }
    case 'linkedin':
      return {
        href: `https://linkedin.com/in/${site.username}`,
        iconName: 'linkedin',
      }
    default:
      return {
        href: '#',
        iconName: 'question'
      }
  }
}

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
      siteName: PropTypes.oneOf(['github', 'linkedin']).isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired
}

export default Social
