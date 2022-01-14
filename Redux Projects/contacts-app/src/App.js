import './App.css';
import Contacts from './components/Contacs/index';
import Edit from './components/Contacs/Edit';
import Error404 from './components/Error404';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="*" component={Error404} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
