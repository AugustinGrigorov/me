import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/fontawesome-free-solid';
import { faBuilding } from '@fortawesome/fontawesome-free-regular';
import Block from './Block';

const activityIcons = {
  work: faBuilding,
  education: faGraduationCap,
};

function TimelineEntry(props) {
  return (
    <Block color={props.color}>
      <h2>{props.title}</h2>
      <FontAwesomeIcon icon={activityIcons[props.type]} size="2x" />
      <p>{props.body}</p>
    </Block>
  );
}

TimelineEntry.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default TimelineEntry;
