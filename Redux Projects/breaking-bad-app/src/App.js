import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
import Quotes from './pages/Quotes/index';
import QuoteDetail from './pages/QuoteDetail/index';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
            <ul>
              <li>
                <Link to="/">Characters</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </ul>
        </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/character/:char_id" component={Detail} />
          <Route exact path="/quotes" component={Quotes} />
          <Route path="/quotes/:quote_id" component={QuoteDetail} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
