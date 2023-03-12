import './App.css';
import Navbar from './components/Navbar';
import Food from './components/Food';
import Addfood from './components/Addfood';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Searchfood from './components/Searchfood';
import Updatefood from './components/Updatefood';
import Fooddetails from './components/Fooddetails';
import Order from './components/Order';
function App() {
  return (
    
      <div className="App">
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/home">
              <Food/>
            </Route>
            <Route exact path="/addfood">
              <Addfood/>
            </Route>
            <Route exact path="/fooddetails:id">
             <Fooddetails/>
            </Route>
            <Route path="/search:searchkey">
              <Searchfood/>
            </Route>
            <Route path="/update:id">
              <Updatefood/>
            </Route>
            <Route path="/orders">
              <Order/>
            </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
