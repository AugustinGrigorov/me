import React, { Component } from 'react';
import Block from './Block';
import './App.css';

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
    const timeline = this.state.data.map(data => <Block data={data} key={data.id} />);

    return (
      <div className="App">
        {timeline}
      </div>
    );
  }
}

export default App;
