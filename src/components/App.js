import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import TopPage from './TopPage';
import AboutPage from './AboutPage';
import MusicPage from './MusicPage';

// class指定とconst指定だとどんなことが異なるのか
// ToDo
const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <ul class="header-nav">
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/music">Music</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/music" component={MusicPage} />
      </Switch>
    </div>
  </Router>
);

console.log('Welcome! My Portfolio!');
export default App;
