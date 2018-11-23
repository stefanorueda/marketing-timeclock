import React, { Component } from 'react'
import { Col, Row, Container } from 'reactstrap'
import Button from './../../components/Button'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactWOW from 'react-wow'
import moment from 'moment'
import TandaLogo from './../../assets/tanda-logo.png'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnStyle: [
                {
                  value:'insert-pass'
                },
                {
                  value:'insert-pass'
                },
                {
                  value:'insert-pass'
                },
                {
                  value:'insert-pass'
                },
              ],
            passCode: [
              {
                value:''
              },
              {
                value:''
              },
              {
                value:''
              },
              {
                value:''
              },
            ],
          };
          this.handleButtonClick = this.handleButtonClick.bind(this);
        }

    handleButtonClick(value) {
        let passCode = this.state.passCode
        let btnStyle = this.state.btnStyle
        if(value === "clear"){
            for(let i = 0; i < passCode.length; i++) {
                passCode[i].value = ''
            }
            for(let i = 0; i < btnStyle.length; i++) {
                btnStyle[i].value = 'insert-pass' 
            } 
        } else if(value === "remove") {
            for(let i = passCode.length-1; i >= 0; i--) {
                if(passCode[i].value !== '') {
                    passCode[i].value = ''
                    i = 0
                }
            }
            for(let i = 0; i < btnStyle.length; i++) {
                btnStyle[i].value = 'insert-pass' 
            } 
        } else {
            for(let i = 0; i < passCode.length; i++) {
                if(passCode[i].value === '') {
                    passCode[i].value = value
                    btnStyle[i].value = 'btnPassCodeInsert' 
                    i = 5
                }
                if(passCode[3].value !== ''){ 
                    for(let i = 0; i < btnStyle.length; i++) {
                        btnStyle[i].value = 'btnPassCodeSuccess' 
                    } 
                    setTimeout(() => {
                        this.props.changeScreen();
                      }, 500);
                }
            }  
        }
        this.setState({passCode,btnStyle})
    }   

  render() {
    
    return (
      <React.Fragment>
          <Container fluid={true}>
            <div className="timeClock_Container">
                <Row className="mb-5 nav">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                        { moment().format("HH:mm")}
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className={"row-insert-pass"}>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col className="col-insert-pass">
                            <Button className={this.state.btnStyle[0].value} text={this.state.passCode[0].value} disabled={true}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col className="col-insert-pass">
                            <Button className={this.state.btnStyle[1].value} text={this.state.passCode[1].value} disabled={true}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col className="col-insert-pass">
                            <Button className={this.state.btnStyle[2].value} text={this.state.passCode[2].value} disabled={true}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col className="col-insert-pass">
                            <Button className={this.state.btnStyle[3].value} text={this.state.passCode[3].value} disabled={true}/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mt-5 mr-4 ml-4">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"1"} onClick={() => this.handleButtonClick(1)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"2"} onClick={() => this.handleButtonClick(2)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"3"} onClick={() => this.handleButtonClick(3)}/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mt-3 mr-4 ml-4">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"4"} onClick={() => this.handleButtonClick(4)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"5"} onClick={() => this.handleButtonClick(5)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"6"} onClick={() => this.handleButtonClick(6)}/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mt-3 mr-4 ml-4">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"7"} onClick={() => this.handleButtonClick(7)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"8"} onClick={() => this.handleButtonClick(8)}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"9"} onClick={() => this.handleButtonClick(9)}/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mt-3 mr-4 ml-4">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTransparent"} text={"Clear"} onClick={() => this.handleButtonClick("clear")}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTC"} text={"0"} onClick={() => this.handleButtonClick('0')}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col>
                            <Button className={"btnTransparent"} text={<FontAwesomeIcon icon="backspace" />} onClick={() => this.handleButtonClick("remove")}/>
                        </Col>
                    </ReactWOW>                        
                </Row>
                <Row className="mt-5">
                    <ReactWOW animation="bounceIn" delay="0.5s">
                        <Col style={{color: "#FFFFFF"}}>
                            <FontAwesomeIcon icon="map-marker-alt" size="xs" style={{color: "#FFFFFF"}} /> Brisbane
                        </Col>
                        <Col style={{color: "#FFFFFF",textAlign:"right"}}>
                            <img src={TandaLogo} alt="tanda-logo" width="120"/>
                        </Col>
                    </ReactWOW>    
                </Row>
            </div>
          </Container>
      </React.Fragment>
    )
  }
}
