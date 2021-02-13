import React, { Component } from 'react';
import Cart from './Cart';
import ShopForm from './ShopForm';
import Header from './Header';
import FEATURES from './Features';

import './App.css';

class App extends Component {
  state = {
    FEATURES: FEATURES,
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    },
  };

  const 

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  getSelected = () => {
    return this.state.selected;
  }
  
  getFeatures = () => {
    return this.state.FEATURES;
  }

  render() {
    

    return (
      <div className="App">
        <Header/>
        <main>
          <ShopForm getFeatures = {this.getFeatures} getSelected = {this.getSelected} updateFeature = {this.updateFeature}/>
          <Cart getSelected = {this.getSelected}/>
        </main>
      </div>
    );
  }
}

export default App;
