import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/fontawesome-free-solid';
import './Project.css';

function Project(props) {
  return (
    <div className="Project">
      <a href={props.url}>
        <h3>
          <FontAwesomeIcon icon={faCube} /> {props.name}
        </h3>
      </a>
      <p>{props.description}</p>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Project.defaultProps = {
  description: '',
};

export default Project;
