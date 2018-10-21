import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import About from './components/About';
import Project from './components/Project';
import TimelineEntry from './components/TimelineEntry';
import ProjectContainer from './components/ProjectContainer';
import { fetchProjects, fetchPersonalInfo } from './actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPersonalInfo());
    dispatch(fetchProjects());
  }

  render() {
    const {
      personalInfoFetched,
      timeline: timelineData,
      projects: projectsData,
      about: aboutData,
    } = this.props;
    const about = personalInfoFetched ? (
      <About
        color={aboutData.color}
        image={aboutData.image}
        name={aboutData.name}
        bio={aboutData.bio}
        social={aboutData.social}
      />
    ) : null;

    const timeline = timelineData.map(entry => (
      <TimelineEntry
        key={entry.id}
        color={entry.color}
        title={entry.title}
        type={entry.type}
        body={entry.body}
      />
    ));

    const projects = projectsData.map(project => (
      <Project
        key={project.id}
        name={project.name}
        url={project.url}
        description={project.description}
      />
    ));

    return (
      <div className="App">
        {about}
        <ProjectContainer>
          {projects}
        </ProjectContainer>
        {timeline}
      </div>
    );
  }
}

App.propTypes = {
  about: PropTypes.shape({
    color: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    social: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
  timeline: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    body: PropTypes.string,
  })),
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  })),
  dispatch: PropTypes.func.isRequired,
  personalInfoFetched: PropTypes.bool.isRequired,
};

App.defaultProps = {
  about: {},
  timeline: [],
  projects: [],
};

const mapStateToProps = state => (
  {
    about: state.personalInfo.about,
    timeline: state.personalInfo.timeline,
    projects: state.projects,
    personalInfoFetched: state.personalInfo.fetched,
  }
);

export default connect(mapStateToProps)(App);
