export const REQUEST_PERSONAL_INFO = 'REQUEST_PERSONAL_INFO';
export const RECEIVE_PERSONAL_INFO = 'RECEIVE_PERSONAL_INFO';
export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

export const requestPersonalInfo = () => ({
  type: REQUEST_PERSONAL_INFO,
});

export const receivePersonalInfo = (timeline, about) => ({
  type: RECEIVE_PERSONAL_INFO,
  timeline,
  about,
});

export const fetchPersonalInfo = () => (dispatch) => {
  dispatch(requestPersonalInfo());
  return fetch('https://grigorov-29bf4.firebaseio.com/data.json')
    .then(response => response.json())
    .then(({ timeline, about }) => dispatch(receivePersonalInfo(timeline, about)));
};

export const requestProjects = () => ({
  type: REQUEST_PROJECTS,
});

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects,
});

export const fetchProjects = () => (dispatch) => {
  dispatch(requestPersonalInfo());
  return fetch('https://api.github.com/users/AugustinGrigorov/repos')
    .then(response => response.json())
    .then((repos) => {
      dispatch(receiveProjects(repos.map(repo => (
        {
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
        }
      ))));
    });
};
