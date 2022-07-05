import React from 'react';
import './style.css';
import DogPhoto from './DisplayLocation';
import AxiosTest from './AxiosTest';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        {/* <DogPhoto breed={'labrador'} /> */}
        <AxiosTest/>
      </div>
    );
  }
}
export default App;
