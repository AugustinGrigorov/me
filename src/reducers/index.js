import { combineReducers } from 'redux';
import {
  REQUEST_PERSONAL_INFO,
  RECEIVE_PERSONAL_INFO,
  REQUEST_PROJECTS,
  RECEIVE_PROJECTS,
} from '../actions';

const personalInfo = (state = {
  fetched: false,
  timeline: [],
  about: {},
}, action) => {
  switch (action.type) {
    case REQUEST_PERSONAL_INFO:
      return {
        ...state,
      };
    case RECEIVE_PERSONAL_INFO:
      return {
        ...state,
        fetched: true,
        timeline: action.timeline,
        about: action.about,
      };
    default:
      return state;
  }
};

const projects = (state = {
  projects: [],
}, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return {
        ...state,
      };
    case RECEIVE_PROJECTS:
      return {
        ...state,
        projectList: action.projects,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  personalInfo,
  projects,
});

export default rootReducer;
