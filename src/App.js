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
    this.props.dispatch(fetchPersonalInfo());
    this.props.dispatch(fetchProjects());
  }

  render() {
    const about = this.props.personalInfoFetched ? (
      <About
        color={this.props.about.color}
        image={this.props.about.image}
        name={this.props.about.name}
        bio={this.props.about.bio}
        social={this.props.about.social}
      />
    ) : null;

    const timeline = this.props.timeline.map(entry => (
      <TimelineEntry
        key={entry.id}
        color={entry.color}
        title={entry.title}
        type={entry.type}
        body={entry.body}
      />
    ));

    const projects = this.props.projects.map(project => (
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
    projects: state.projects.projectList,
    personalInfoFetched: state.personalInfo.fetched,
  }
);

export default connect(mapStateToProps)(App);
