import { combineReducers } from 'redux';
import {
  RECEIVE_PERSONAL_INFO,
  RECEIVE_PROJECTS,
} from '../actions';

const personalInfo = (state = {
  fetched: false,
  timeline: [],
  about: {},
}, action) => {
  switch (action.type) {
    case RECEIVE_PERSONAL_INFO:
      return {
        fetched: true,
        timeline: action.timeline,
        about: action.about,
      };
    default:
      return state;
  }
};

const projects = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personalInfo,
  projects,
});

export default rootReducer;
