export const RECEIVE_PERSONAL_INFO = 'RECEIVE_PERSONAL_INFO';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

const receivePersonalInfo = (timeline, about) => ({
  type: RECEIVE_PERSONAL_INFO,
  timeline,
  about,
});

export const fetchPersonalInfo = () => dispatch => (
  fetch('https://grigorov-29bf4.firebaseio.com/data.json')
    .then(response => response.json())
    .then(({ timeline, about }) => dispatch(receivePersonalInfo(timeline, about)))
);

const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects,
});

export const fetchProjects = () => dispatch => (
  fetch('https://api.github.com/users/AugustinGrigorov/repos')
    .then(response => response.json())
    .then((repos) => {
      dispatch(receiveProjects(repos.map(repo => (
        {
          id: repo.id,
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          lastActive: new Date(repo.updated_at),
        }
      ))
        .slice()
        .sort((project1, project2) => (project2.lastActive - project1.lastActive))));
    })
);
