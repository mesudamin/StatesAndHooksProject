import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
                 <p className='diss' > Even  clicks Counter :  {this.props.count % 2 === 0  ? this.props.count : this.props.count -1  } </p>
      </div>
    )
  }
}
