import React from 'react';
import Parts from './Parts';

export default class Spec extends React.Component{
    render(){
        const features = Object.keys(this.props.getFeatures()).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            let key = 0;
            const options = this.props.getFeatures()[feature].map(item => {
                key++;
                return(
                    <Parts key={key} item = {item} feature = {feature} getSelected = {this.props.getSelected} updateFeature = {this.props.updateFeature}/>
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
      <div>{features}</div>
  );
}

}