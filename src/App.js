import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Buttons from './components/Buttons';
import Clothing from './components/Clothing';
import Footer from './components/Footer';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Products from './components/Products';

function App() {
  return (
    <div className="App">
        
        <Router>
          <Header />
          <Switch>
            <Route exact path ="/">
              <Carousel />
              <Buttons />
              <Clothing />
            </Route>
            <Route path="/product">
                <Products />
            </Route>
          </Switch>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
