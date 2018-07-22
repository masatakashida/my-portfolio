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
import EngineeringPage from './EngineeringPage';

// class指定とconst指定だとどんなことが異なるのか
// ToDo
const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <ul class="header-nav">
          <li><Link to="/">Top</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/engineering">Engineering</Link></li>
          <li><Link to="/education">Education</Link></li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/music" component={MusicPage} />
          <Route exact path="/engineering" component={EngineeringPage} />
          <Route exact path="/education" component={EducationPage} />
          <Route path="/my-portfolio/" component={ProfilePage} />
          <Route path="/" component={ProfilePage} />
        </Switch>
      </div>
    </div>
  </Router>
);

console.log('Welcome! My Portfolio!');
export default App;
