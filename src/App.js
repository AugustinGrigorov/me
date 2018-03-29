import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/fontawesome-free-solid';
import { faBuilding } from '@fortawesome/fontawesome-free-regular';
import Block from './Block';
import './App.css';

const activityIcons = {
  work: faBuilding,
  education: faGraduationCap,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    fetch('https://grigorov-29bf4.firebaseio.com/timeline.json').then((response) => {
      response.json().then((data) => {
        this.setState({ data });
      });
    });
  }

  render() {
    const timeline = this.state.data.map(data => (
      <Block key={data.id} color={data.color}>
        <h3>{data.title}</h3>
        <FontAwesomeIcon icon={activityIcons[data.type]} size="2x" />
        <p>{data.body}</p>
      </Block>
    ));

    return (
      <div className="App">
        {timeline}
      </div>
    );
  }
}

export default App;
