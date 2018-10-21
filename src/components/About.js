import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faStackOverflow,
} from '@fortawesome/fontawesome-free-brands';
import Block from './Block';
import './About.css';

const socialIcons = {
  facebook: faFacebook,
  twitter: faTwitter,
  linkedin: faLinkedin,
  github: faGithub,
  stackoverflow: faStackOverflow,
};

function About(props) {
  const {
    social: socialData,
    color,
    name,
    image,
    bio,
  } = props;
  const social = socialData.map(profile => (
    <a href={profile.url} target="_blank" rel="noreferrer noopener" key={profile.name}>
      <FontAwesomeIcon icon={socialIcons[profile.name]} size="lg" />
    </a>
  ));

  return (
    <Block color={color}>
      <img className="About-image" alt="Augustin Grigorov" src={image} />
      <h1>{name}</h1>
      <div className="About-social">
        {social}
      </div>
      <p>{bio}</p>
    </Block>
  );
}

About.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default About;
