import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactWOW from 'react-wow'
import Vid1 from './../../assets/vid1.gif'
import Button from './../../components/Button'
import moment from 'moment'
import './styles.css'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationIn:'bounceIn',
            animationOut:'bounceIn',
            iterationIn: '1',
            iterationOut: '1',
            imageIn:'bounceIn',
          };
          this.clockInBtn = this.clockInBtn.bind(this);
          this.clockOutBtn = this.clockOutBtn.bind(this);
        }

    clockInBtn(){
        this.setState({animationIn: 'bounceOut',animationOut:'bounceOut',iterationIn:'1', imageIn:'bounceOut'})
        setTimeout(() => {
            this.props.addClockIn()
          }, 500);   
    }

    clockOutBtn(){
        this.setState({animationIn: 'bounceOut',animationOut: 'bounceOut',iterationIn:'1', imageIn:'bounceOut'})
        setTimeout(() => {
            this.props.addClockOut()
          }, 500);   
    }

    componentWillMount(){
        if(this.props.status){
        setTimeout(() => {
            this.setState({animationIn: 'pulse',iterationIn:'100'})
          }, 1000); 
        } else {
            setTimeout(() => {
                this.setState({animationOut: 'pulse',iterationOut:'100'})
              }, 1000); 
        }  
    }

  render() {
      let buttonShow = true
      if(this.props.btnClockIn === 'buttonLabelActive' ) {
        buttonShow = true
      } else {
        buttonShow = false
      }
    return (
      <React.Fragment>
        <Container fluid={true}>
            <div className="timeClock_Container">
                <Row className="mb-2 nav">
                    <ReactWOW animation="bounceIn">
                        <Col>
                            { moment().format("HH:mm")}
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mb-3">
                    <ReactWOW animation={this.state.imageIn}>
                        <Col className="text-center">
                            <img src={Vid1} alt="" width="240"/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="buttonLabelRow mr-4 ml-4 mb-3">
                    <ReactWOW animation={"bounceIn"}>
                        <Col className={this.props.data.btnLabelColIn}>
                            <Button className={this.props.btnClockIn} text="Start" onClick={this.props.btnStateChange}/>
                        </Col>
                        <Col className={this.props.data.btnLabelColOut}>
                            <Button className={this.props.btnClockOut} text="Finish" onClick={this.props.btnStateChange}/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mr-4 ml-4">
                    <ReactWOW animation={"pulse"} iteration={"500"}>
                        <Col>
                        { buttonShow && (<Button className={'btnClockInActive'} text="Clock in" onClick={this.clockInBtn}/>) }
                        {!buttonShow && (<Button className={'btnClockOutActive'} text="Clock out" onClick={this.clockOutBtn}/>) }
                        </Col>
                    </ReactWOW>
                </Row>
            </div>
        </Container>
      </React.Fragment>
    )
  }
}
