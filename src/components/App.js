import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import ProfilePage from './ProfilePage';
import MusicPage from './MusicPage';
import EducationPage from './EducationPage';
import EngineerPage from './EngineerPage';

// class指定とconst指定だとどんなことが異なるのか
// ToDo
const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <ul class="header-nav">
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/engineer">Engineer</Link></li>
          <li><Link to="/education">Education</Link></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/" component={ProfilePage} />
        <Route exact path="/music" component={MusicPage} />
        <Route exact path="/engineer" component={EngineerPage} />
        <Route exact path="/education" component={EducationPage} />
      </Switch>
    </div>
  </Router>
);

console.log('Welcome! My Portfolio!');
export default App;
