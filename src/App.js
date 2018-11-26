import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap'
import './App.css';
import TimeClockFeed from './views/TimeClockFeed'
import TimeClock from './views/TimeClock'
import TimeClockImageScreen from './views/TimeClockImageScreen'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faSortDown, faBackspace, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import faker from 'faker'
import moment from 'moment'
import ReactWOW from 'react-wow'
import tcAvatar1 from './assets/tcavatar1.png'
import tcAvatar2 from './assets/tcavatar2.png'
import tcAvatar3 from './assets/tcavatar3.png'
import tcAvatar4 from './assets/tcavatar4.png'
import tcAvatar5 from './assets/tcavatar5.png'
import tcAvatar6 from './assets/tcavatar6.png'
import tcAvatar7 from './assets/tcavatar7.png'
import tcAvatar8 from './assets/tcavatar8.png'
import tcAvatar9 from './assets/tcavatar9.png'
import tcAvatar10 from './assets/tcavatar10.png'

library.add(faPlus,faSortDown,faBackspace,faMapMarkerAlt)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        screen: true,
        screen2: false,
        status: true,
        btnClockIn: 'buttonLabelActive',
        btnClockOut: 'buttonLabel',
        btnLabelColIn: 'buttonLabelColActive',
        btnLabelColOut: 'buttonLabelCol',
        imgAvatars:[tcAvatar1,tcAvatar2,tcAvatar3,tcAvatar4,tcAvatar5,tcAvatar6,tcAvatar7,tcAvatar8,tcAvatar9,tcAvatar10],
        timeClockFeed: [
          {
            name: faker.name.findName(),
            avatar: tcAvatar1,
            time: moment().subtract(1, "hour").format("HH:mm"),
            range: moment().to(moment().subtract(1, "hour")),
            clock: '#FB8C00',
            location: 'Brisbane',
            user: false,
            boxStyle: 'tc-feed__tcBox'

          },
          {
            name: faker.name.findName(),
            avatar: tcAvatar2,
            time: moment().subtract(34, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(34, "minutes")),
            clock: '#FB8C00',
            location: 'Sydney',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: tcAvatar3,
            time: moment().subtract(15, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(15, "minutes")),
            clock: '#FB8C00',
            location: 'Brisbane',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: tcAvatar4,
            time: moment().subtract(3, "minutes").format("HH:mm"),
            range: moment().to(moment().subtract(3, "minutes")),
            clock: '#FB8C00',
            location: 'Adelaide',
            user: false,
            boxStyle: 'tc-feed__tcBox'
          },
          {
            name: faker.name.findName(),
            avatar: tcAvatar5,
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
      this.btnStateChange = this.btnStateChange.bind(this)
    }
    
    btnStateChange(){
      let tc = this.state.timeClockFeed
      tc = tc.reverse()
      if(this.state.btnClockIn === 'buttonLabelActive') {
        this.setState({tc,btnClockIn:'buttonLabel',btnClockOut:'buttonLabelActive',btnLabelColIn:'buttonLabelCol',btnLabelColOut:'buttonLabelColActive'})
      }
      if(this.state.btnClockIn === 'buttonLabel') {
        this.setState({tc,btnClockIn:'buttonLabelActive',btnClockOut:'buttonLabel',btnLabelColOut:'buttonLabelCol',btnLabelColIn:'buttonLabelColActive'})
      }
    }

    addFeed() {
      let checkClock = Math.random() >= 0.5
      let avatarImg = this.state.imgAvatars
      let clockColor = (checkClock) ? '#FB8C00' : '#84b32d'
      let locations = ['Brisbane','Sydney','Melbourne','Perth','Adelaide','Hobart']
      let loc = locations[Math.floor(Math.random() * locations.length)];
      const dataFeed = {
          name: faker.name.findName(),
          avatar: avatarImg[Math.floor(Math.random() * avatarImg.length)],
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
    let avatarImg = this.state.imgAvatars
    const dataFeed = {
      name: 'You have CLOCKED IN',
      avatar: avatarImg[Math.floor(Math.random() * avatarImg.length)],
      time: moment().format("HH:mm"),
      range: moment().to(moment()),
      clock: '#84b32d',
      location: 'Brisbane',
      user: true,
      boxStyle: 'tc-feed__tcBoxUser'
    }
    let tc = this.state.timeClockFeed
    tc = tc.reverse().push(dataFeed)
    this.setState({tc,screen: true, screen2: false, status: false, btnClockIn: 'buttonLabel',
    btnClockOut: 'buttonLabelActive',btnLabelColOut:'buttonLabelColActive',btnLabelColIn:'buttonLabelCol'})
  }

  addClockOut(){
    let avatarImg = this.state.imgAvatars
    const dataFeed = {
      name: 'You have CLOCKED OUT',
      avatar: avatarImg[Math.floor(Math.random() * avatarImg.length)],
      time: moment().format("HH:mm"),
      range: moment().to(moment()),
      clock: '#FB8C00',
      location: 'Brisbane',
      user: true,
      boxStyle: 'tc-feed__tcBoxUserOut'
    }
    let tc = this.state.timeClockFeed
    tc = tc.reverse().push(dataFeed)
    this.setState({tc,screen: true, screen2: false, status: true, btnClockIn: 'buttonLabelActive',
    btnClockOut: 'buttonLabel',btnLabelColIn:'buttonLabelColActive',btnLabelColOut:'buttonLabelCol'})
  }

  render() {
    return (
     <React.Fragment>
       {/* <Container fluid={true}>
        <Row>
          <Col> */}
            <div className="layer1">
            <TimeClockFeed data={this.state.timeClockFeed}/>
            </div>
            <ReactWOW animation="fadeInUp" delay="0.5s" >
              <div className="layer2">
                <div className="device-window tablet">
                  <span>
                    {this.state.screen && ( <TimeClock changeScreen={this.changeScreen}/>)}
                    {this.state.screen2 && ( <TimeClockImageScreen btnClockIn={this.state.btnClockIn} addClockIn={this.addClockIn} addClockOut={this.addClockOut} btnClockOut={this.state.btnClockOut} btnStateChange={this.btnStateChange} data={this.state} status={this.state.status}/>)}
                  </span>
                </div>
              </div>
              </ReactWOW>
          {/* </Col>
        </Row>
      </Container> */}
     </React.Fragment>
    );
  }
}

export default App;
