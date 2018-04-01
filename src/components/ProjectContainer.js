import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import './ProjectContainer.css';

function ProjectContainer(props) {
  return (
    <Block color="#3D5AFE">
      <h2>My Projects</h2>
      <div className="Project-wrapper">
        <div className="Project-wrapper-blur--first" />
        <div className="Project-container">
          <div className="Project-filler" />
          {props.children}
          <div className="Project-filler" />
        </div>
        <div className="Project-wrapper-blur--last" />
      </div>

    </Block>
  );
}

ProjectContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectContainer;
