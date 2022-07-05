import React from 'react';
import './style.css';
import DogPhoto from './DisplayLocation';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <DogPhoto breed={'labrador'} />
      </div>
    );
  }
}
export default App;
