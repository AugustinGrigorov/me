import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import './ProjectContainer.css';

function ProjectContainer(props) {
  return (
    <Block color="#3D5AFE">
      <h3>My Projects</h3>
      <div className="Project-container">
        {props.children}
      </div>
    </Block>
  );
}

ProjectContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectContainer;
