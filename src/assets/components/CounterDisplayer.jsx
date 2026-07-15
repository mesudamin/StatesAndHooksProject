import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
         <p className='diss' > All clicks Counter :  {this.props.count} </p>
      </div>
    )
  }
}
