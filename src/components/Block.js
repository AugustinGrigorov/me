import React from 'react';
import PropTypes from 'prop-types';
import './Block.css';

function Block(props) {
  const { color, children } = props;
  return (
    <div className="Block" style={{ background: color }}>
      <div className="Block-content">
        {children}
      </div>
    </div>
  );
}

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Block;
