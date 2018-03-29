import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import './About.css';

function About(props) {
  return (
    <Block color={props.color}>
      <img className="About-image" alt="Augustin Grigorov" src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
    </Block>
  );
}

About.propTypes = {
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default About;
