import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGithub, faStackOverflow } from '@fortawesome/fontawesome-free-brands';
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
  const social = props.social.map(profile => (
    <a href={profile.url} target="_blank">
      <FontAwesomeIcon icon={socialIcons[profile.name]} size="lg" />
    </a>
  ));

  return (
    <Block color={props.color}>
      <img className="About-image" alt="Augustin Grigorov" src={props.image} />
      <h3>{props.name}</h3>
      <div className="About-social">
        {social}
      </div>
      <p>{props.bio}</p>
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
