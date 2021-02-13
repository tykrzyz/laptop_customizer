import React from 'react';
import Spec from './Spec';

export default class ShopForm extends React.Component{
  
    render(){
     
        return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Spec getSelected = {this.props.getSelected} getFeatures = {this.props.getFeatures} updateFeature = {this.props.updateFeature}/>
          </form>
        )
    }
}