import React, { Component } from 'react'
import { ListGroupItem, Media } from 'reactstrap'
import './styles.css'


export default class index extends Component {
  
  render() {
   
    return (
      <React.Fragment>
        <ListGroupItem  action className={this.props.data.boxStyle}>
            <Media>
                <Media left middle href="#">
                    <img src={this.props.data.avatar} alt="avatar" className="img-responsive" width="50" style={{borderRadius:'50%'}}/>
                </Media>
                <Media body className="ml-2">
                    <Media>
                        <div style={{display:'inline-block'}}>
                            <span className="emp-name">{this.props.data.name}</span>
                            <span className="tc-source">{this.props.data.location}</span>
                        </div>
                    </Media>
                    <div style={{display:'inline-block'}}>
                        <span className="tc-time" style={{color: this.props.data.clock}}>{this.props.data.time}</span>
                        <span className="tc-source">{this.props.data.range}</span>
                    </div>
                </Media>
            </Media>
        </ListGroupItem>
      </React.Fragment>
    )
  }
}
