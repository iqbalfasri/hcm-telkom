import React, { Component } from 'react'

// Component
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    )
  }
}


export default Home;