import React, { Component } from 'react';
import About from './components/About';
import TimelineEntry from './components/TimelineEntry';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeline: [],
      about: {},
    };
  }

  componentWillMount() {
    fetch('https://grigorov-29bf4.firebaseio.com/data.json').then((response) => {
      response.json().then(({ timeline, about }) => {
        this.setState({ timeline, about });
      });
    });
  }

  render() {
    const timeline = this.state.timeline.map(entry => (
      <TimelineEntry
        key={entry.id}
        color={entry.color}
        title={entry.title}
        type={entry.type}
        body={entry.body}
      />
    ));

    const about = Object.keys(this.state.about).length ? (
      <About
        color={this.state.about.color}
        image={this.state.about.image}
        name={this.state.about.name}
        bio={this.state.about.bio}
      />
    ) : null;

    return (
      <div className="App">
        {about}
        {timeline}
      </div>
    );
  }
}

export default App;
