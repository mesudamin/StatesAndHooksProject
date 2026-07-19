import React, { Component } from 'react'
import CounterDisplayer from "./CounterDisplayer"
import EvenCounterDisplayer from "./EvenCounterDisplayer"
export default class MyCounter extends Component {
constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }

allClicksCounter=()=>{
     this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
}
  render() { 
    return (
      <> 
      <div className='dis'> 
        <button onClick={this.allClicksCounter} className='disa' >click here</button>
       <CounterDisplayer 
       count={this.state.count}
       />
       <EvenCounterDisplayer
        count={this.state.count}
       />
       </div>
      </>
    )
  }
}
