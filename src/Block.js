import React from 'react';
import PropTypes from 'prop-types';
import './Block.css';

const icons = {
  work: <i className="far fa-building fa-2x" />,
  education: <i className="fas fa-graduation-cap fa-2x" />,
};

function Block(props) {
  return (
    <div className="Block" style={{ background: props.data.color }}>
      <div className="Block-content">
        <h3>{props.data.title}</h3>
        {icons[props.data.type]}
        <p>{props.data.body}</p>
      </div>
    </div>
  );
}

Block.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Block.defaultProps = {
  data: {},
};

export default Block;
