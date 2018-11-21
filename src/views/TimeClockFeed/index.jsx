import React, { Component } from 'react'
import { Row, Col, ListGroup } from 'reactstrap'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//components
import ListItem from './../../components/ListItem'


export default class index extends Component {

  render() {
    const items = this.props.data.reverse().map((el, i) => (
        <div key={i}>
            <ListItem data={this.props.data[i]} status={this.props.status}/>
        </div>
    ));

    return (
     <React.Fragment>
         <div className="tc-feed-container">
            <Row className="tc-feed__titleContainer">
                <Col>
                    <div className="tc-feed__title">
                        Live Time Clock Feed <FontAwesomeIcon icon="plus" size="xs" style={{color: "#3FAFD7"}} />
                    </div>
              
                    <div className="tc-feed__labels"> 
                        <a href="#" style={{color: "#333"}}>All Time Clocks </a><FontAwesomeIcon icon="sort-down" size="1x" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup flush className="tc-feed__tcContainer">
                    {/* <ListGroupItem  action className="tc-feed__tcSearchBox">
                        <div className="tc-feed__search">
                            <Form>
                                <Input placeholder="Search recent data by name..." bsSize="sm" disabled/> 
                            </Form>
                        </div>
                        <div className="tc-feed__filter">
                            <FormGroup>
                                <div>
                                    <CustomInput type="checkbox" id="exampleCustomInline" label="IN" inline className="tc-feed__IN" disabled/>
                                    <CustomInput type="checkbox" id="exampleCustomInline2" label="OUT" inline className="tc-feed__OUT" disabled/>
                                </div>
                            </FormGroup>
                        </div>
                    </ListGroupItem> */}
                    {items}    
                    </ListGroup>
                </Col>
            </Row>
         </div>
     </React.Fragment>
    )
  }
}
