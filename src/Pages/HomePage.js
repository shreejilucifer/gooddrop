import React, { Component } from 'react';
import './Components/CSS/HomePageCSS/loader.css';

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

class HomePage extends Component {
  state = {
        loading: true
      };

      componentDidMount() {
      setTimeout(() => this.setState({ loading: false }), 1000); // simulates an async action, and hides the spinner
    }
  render() {
    const { loading } = this.state;

    if(loading) {
      return <Loader />;
    }

    return (
      <div className="homepage">
        <Navbar />
        <HomeHeader />
        <StepMiddleSection />
        <Footer />
      </div>
    );
  }

}

export default HomePage;
