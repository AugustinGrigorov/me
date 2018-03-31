import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import TimelineEntry from './components/TimelineEntry';
import ProjectContainer from './components/ProjectContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
      about: {},
      projects: [],
    };
  }

  componentWillMount() {
    fetch('https://grigorov-29bf4.firebaseio.com/data.json').then((response) => {
      response.json().then(({ timeline, about }) => {
        this.setState({ timeline, about });
      });
    });
    fetch('https://api.github.com/users/AugustinGrigorov/repos').then((response) => {
      response.json().then((repos) => {
        this.setState({
          projects: repos.map(repo => (
            {
              id: repo.id,
              name: repo.name,
              url: repo.html_url,
              description: repo.description,
            }
          )),
        });
      });
    });
  }

  render() {
    const about = Object.keys(this.state.about).length ? (
      <About
        color={this.state.about.color}
        image={this.state.about.image}
        name={this.state.about.name}
        bio={this.state.about.bio}
      />
    ) : null;

    const timeline = this.state.timeline.map(entry => (
      <TimelineEntry
        key={entry.id}
        color={entry.color}
        title={entry.title}
        type={entry.type}
        body={entry.body}
      />
    ));

    const projects = this.state.projects.map(project => (
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

export default App;
