import React from 'react';
import ShopItem from './ShopItem'

export default class ShopForm extends React.Component{
  
    render(){
      const features = Object.keys(this.props.getFeatures()).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const options = this.props.getFeatures()[feature].map(item => {
            return(
              <ShopItem item = {item} feature = {feature} getSelected = {this.props.getSelected} updateFeature = {this.props.updateFeature}/>
            )
          });
    
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              {options}
            </fieldset>
          );
          
        });
        return(
          <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }
}