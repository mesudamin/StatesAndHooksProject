import React, { Component } from 'react'
import CounterDisplayer from "./CounterDisplayer"
export default class MyCounter extends Component {
constructor(props) {
    super(props);
    // Define initial state inside constructor
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
       </div>
      </>
    )
  }
}
