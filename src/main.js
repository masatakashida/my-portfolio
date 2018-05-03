import React from 'react';
import ReactDOM from 'react-dom';

import {SubComponent} from './sub-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <SubComponent name="Counter" />
      </div>
    );
  }
}
console.log('Welcome!');
ReactDOM.render(<App/>, document.querySelector('#app'));
