import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/fontawesome-free-solid';
import './Project.css';

function Project(props) {
  const { url, name, description } = props;
  return (
    <div className="Project">
      <a href={url}>
        <h3>
          <FontAwesomeIcon icon={faCube} />
          {' '}
          {name}
        </h3>
      </a>
      <p>{description}</p>
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
