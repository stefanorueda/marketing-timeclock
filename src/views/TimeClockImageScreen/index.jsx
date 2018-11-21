import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactWOW from 'react-wow'
import Vid1 from './../../assets/vid1.gif'
import Button from './../../components/Button'
import moment from 'moment'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animationIn:'bounceIn',
            animationOut:'bounceIn',
            iterationIn: '1',
            iterationOut: '1',
            imageIn:'bounceIn'
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
                            <img src={Vid1} alt="" width="280"/>
                        </Col>
                    </ReactWOW>
                </Row>
                <Row className="mr-4 ml-4">
                    <ReactWOW animation={this.state.animationIn} iteration={this.state.iterationIn}>
                        <Col style={{paddingRight:0}}>
                            <Button className={this.props.btnClockIn} text="Clock in" onClick={this.clockInBtn}/>
                        </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.state.animationOut} iteration={this.state.iterationOut}>
                        <Col style={{paddingLeft:0}}>
                            <Button className={this.props.btnClockOut} text="Clock out" onClick={this.clockOutBtn}/>
                        </Col>
                    </ReactWOW>
                </Row>
            </div>
        </Container>
      </React.Fragment>
    )
  }
}
