import React from 'react';
import SummaryOption from './SummaryOption';
import SummaryTotal from './SummaryTotal';

export default class Cart extends React.Component{
    
    render(){
    const selected = this.props.getSelected();

      

      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption selected = {selected}/>
            <SummaryTotal selected = {selected}/>
      </section>
      )
    }
}