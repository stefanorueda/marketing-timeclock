import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import './styles.css'

export default class index extends Component {
  render() {
    return (
     <React.Fragment>
         <div className="timeClock_Container">
        <Loader type="Puff" color="#3fafd7" height={80} width={80} />
        </div>
     </React.Fragment>
    )
  }
}
