import React, { PureComponent } from 'react';
import './Components/CSS/HomePageCSS/loader.css';

import Auth from './Components/HomePageComps/Auth';
import Navbar from './Components/HomePageComps/Navbar';
import HomeHeader from './Components/HomePageComps/HomeHeader';
import StepMiddleSection from './Components/HomePageComps/StepMiddleSection';
import Footer from './Components/HomePageComps/Footer';

const Loader = () => {
  return (
    <div className="loadercontainer">
      <div className="timer"></div>
    </div>
  );
};

class HomePage extends PureComponent {
  state = {
        loading: true,
      };

      componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
    }

  render() {
    const Consumer = this.props.Consumer ;
    const { loading } = this.state;

    if(loading) {
      return <Loader />;
    }
    
    return (
      <Consumer>
        {({ state, actions }) => (
          <div className="homepage">
            <Auth fun={actions.helloWorld} />
            <Navbar Consumer={Consumer}/>
            <HomeHeader Consumer={Consumer}/>
            <StepMiddleSection Consumer={Consumer}/>
            <Footer Consumer={Consumer}/>
          </div>
        )}
      </Consumer>
    );
  }
}

export default HomePage;
