import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';

function App() {
  return (
    <div>

      <Header></Header>
      {/* <Shop></Shop> */}

      <Router>
      <Switch>
        <Router path="/shop">
          <Shop></Shop>

        </Router>

        <Router path="/review">
          <Review></Review>
        </Router>

      </Switch>

      </Router>

    </div>
  );
}

export default App;
