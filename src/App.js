import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap'
import './App.css';
import TimeClockFeed from './views/TimeClockFeed'
import TimeClock from './views/TimeClock'
import TimeClockImageScreen from './views/TimeClockImageScreen'
import TimeClockResponse from './views/TimeClockResponse'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faSortDown, faBackspace, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import faker from 'faker'
import moment from 'moment'
import ReactWOW from 'react-wow'

library.add(faPlus,faSortDown,faBackspace,faMapMarkerAlt)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        screen: true,
        screen2: false,
        response: false,
        status: true,
        btnClockIn: 'btnClockInActive',
        btnClockOut: 'btnClockOut',
        timeClockFeed: [
          {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            time: moment().subtract(1, "hour").format("HH:mm"),
            range: moment().to(moment().subtract(1, "hour")),
            clock: '#FB8C00',
            location: 'Brisbane',
            user: false,
            boxStyle: 'tc-feed__tcBox'

          },
          {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            time: moment().subtract(34, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(34, "minutes")),
            clock: '#FB8C00',
            location: 'Sydney',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            time: moment().subtract(15, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(15, "minutes")),
            clock: '#FB8C00',
            location: 'Brisbane',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            time: moment().subtract(3, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(3, "minutes")),
            clock: '#FB8C00',
            location: 'Adelaide',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            time: moment().subtract(2, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(2, "minutes")),
            clock: '#FB8C00',
            location: 'Perth',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          }
        ],
      };
      this.changeScreen = this.changeScreen.bind(this)
      this.addClockIn = this.addClockIn.bind(this)
      this.addClockOut = this.addClockOut.bind(this)
    }

    addFeed() {
      let checkClock = Math.random() >= 0.5
      let clockColor = (checkClock) ? '#FB8C00' : '#84b32d'
      let locations = ['Brisbane','Sydney','Melbourne','Perth','Adelaide','Hobart']
      let loc = locations[Math.floor(Math.random() * locations.length)];
      const dataFeed = {
          name: faker.name.findName(),
          avatar: faker.image.avatar(),
          time: moment().format("HH:mm"),
          range: moment().to(moment()),
          clock: clockColor,
          location: loc,
          user: false,
          boxStyle: 'tc-feed__tcBox'
      }
      let tc = this.state.timeClockFeed
      tc = tc.reverse().push(dataFeed)
      this.setState({tc})
  }

  changeScreen() {
    this.setState({screen: false, screen2: true})
  }

  componentDidMount() {
      this.interval = setInterval(() => this.addFeed(), 5000);
  }

  addClockIn(){
    const dataFeed = {
      name: 'You have CLOCKED IN',
      avatar: faker.image.avatar(),
      time: moment().format("HH:mm"),
      range: moment().to(moment()),
      clock: '#84b32d',
      location: 'Brisbane',
      user: true,
      boxStyle: 'tc-feed__tcBoxUser'
    }
    let tc = this.state.timeClockFeed
    tc = tc.reverse().push(dataFeed)
    this.setState({tc,screen: true, screen2: false, status: false, btnClockIn: 'btnClockIn',
    btnClockOut: 'btnClockOutActive'})
  }

  addClockOut(){
    const dataFeed = {
      name: 'You have CLOCKED OUT',
      avatar: faker.image.avatar(),
      time: moment().format("HH:mm"),
      range: moment().to(moment()),
      clock: '#FB8C00',
      location: 'Brisbane',
      user: true,
      boxStyle: 'tc-feed__tcBoxUserOut'
    }
    let tc = this.state.timeClockFeed
    tc = tc.reverse().push(dataFeed)
    this.setState({tc,screen: true, screen2: false, status: true, btnClockIn: 'btnClockInActive',
    btnClockOut: 'btnClockOut'})
  }

  render() {
    return (
     <React.Fragment>
       <Container style={{marginTop: '200px'}}>
        <Row>
          <Col>
            <TimeClockFeed data={this.state.timeClockFeed}/>
          </Col>
          <Col>
          <ReactWOW animation="fadeInUp" delay="0.5s" >
            <div className="device-window tablet">
              <span>
                {this.state.screen && ( <TimeClock changeScreen={this.changeScreen}/>)}
                {this.state.screen2 && ( <TimeClockImageScreen btnClockIn={this.state.btnClockIn} addClockIn={this.addClockIn} addClockOut={this.addClockOut} btnClockOut={this.state.btnClockOut} status={this.state.status}/>)}
                {this.state.response && ( <TimeClockResponse/>)}
              </span>
            </div>
            </ReactWOW>
          </Col>
        </Row>
      </Container>
     </React.Fragment>
    );
  }
}

export default App;
