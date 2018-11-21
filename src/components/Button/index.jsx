import React, { Component } from 'react'
import { Button } from 'reactstrap'
import './styles.css'

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Button className={this.props.className} block disabled={this.props.disabled} onClick={this.props.onClick}>{this.props.text}</Button>
      </React.Fragment>
    )
  }
}
