import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import {HeaderComponent} from './header-component';
import {MainComponent} from './main-component';
import {SubComponent} from './sub-component';
import {FooterComponent} from './footer-component';

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent name="志田雅貴" />
        <SubComponent name="music" />
        <MainComponent name="志田雅貴" />
        <FooterComponent name="志田雅貴" />
      </div>
    );
  }
}
console.log('Welcome! My Portfolio!');
ReactDOM.render(<App/>, document.querySelector('#app'));
