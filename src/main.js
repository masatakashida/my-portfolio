import React from 'react';
import ReactDOM from 'react-dom';

import {HeaderComponent} from './header-component';
import {SubComponent} from './sub-component';
import {FooterComponent} from './footer-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent name="志田雅貴" />
        <h1>Hello React</h1>
        <SubComponent name="Counter" />
        <FooterComponent name="志田雅貴" />
      </div>
    );
  }
}
console.log('Welcome!');
ReactDOM.render(<App/>, document.querySelector('#app'));
