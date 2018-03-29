import React from 'react';
import PropTypes from 'prop-types';
import './Block.css';

function Block(props) {
  return (
    <div className="Block" style={{ background: props.color }}>
      <div className="Block-content">
        {props.children}
      </div>
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Block;
