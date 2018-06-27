import React, { PureComponent, createContext } from 'react';
import {  BrowserRouter as Router, Route} from "react-router-dom";
import ScrollToTop from './Pages/Components/HomePageComps/ScrollToTop';

// Pages
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Terms from './Pages/Terms';
import PaymentPolicy from './Pages/PaymentPolicy';
import Order from './Pages/Order';
import CustomerReviews from './Pages/CustomerReviews';

// Todo: Import Context Store
import store from './Context/Store';
import actions from './Context/Actions';

// Todo: Initialize a Context
const Context = createContext();
const { Provider, Consumer } = Context ;

class App extends PureComponent {
  state = store ;
  render() {
    for(let f in actions) {
      if(typeof actions[f] === "function"){
        actions[f] = actions[f].bind(this);
      }
    }
    return (
      <Provider value={{state: this.state, actions}}>
          <Router>
            <ScrollToTop>
              <div>
                <Route exact path="/" render={() => <HomePage Consumer={Consumer}/>}/>
                <Route path="/aboutus" render={() => <AboutUs Consumer={Consumer} />}/>
                <Route path="/privacypolicy" render={()=><PrivacyPolicy Consumer={Consumer}/>}/>
                <Route path="/terms" render={()=><Terms Consumer={Consumer}/>}/>
                <Route path="/paymentpolicy" render={()=><PaymentPolicy Consumer={Consumer}/>}/>
                <Route path="/order" render={()=><Order Consumer={Consumer}/>}/>
                <Route path="/customerreviews" render={()=><CustomerReviews Consumer={Consumer}/>}/>
              </div>
            </ScrollToTop>
          </Router>
      </Provider>
    );
  }
}

export default App;
