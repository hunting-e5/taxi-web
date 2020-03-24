import React, { Component } from 'react';
import './App.css';
import MyTab from './components/Tabs/MyTab/MyTab';
import RoomTab from './components/Tabs/RoomTab/RoomTab';
import Footer from './components/Footer/Footer';
import { Route, } from "react-router-dom";
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import Profile from './components/Tabs/ProfileTab/ProfileTab';
import CreateRoom from './components/CreateRoom';
import EmptyCard from './components/EmptyCard';
import Setting from './components/Tabs/SettingTab/Setting';
import Button from '@material-ui/core/Button';

class App extends Component {
  state = {
    user: '',
    roomlist: '',
  }

  callApiRoomlist = async () => {
    const response = await fetch('/api/roomlist');
    const body = await response.json();
    return body;
  }

  callApiUserlist = async () => {
    const response = await fetch('/api/userlist');
    const body = await response.json();
    return body;
  }

  findCurrentUser = function (userlist) {
    var filteredUserlist = userlist.filter(function (user) {
      if (user.userId === this.props.userId) return true; //로그인 시 this.props.userId는 로그인 한 아이디로 바꿔야 할 것
      else return false;
    }.bind(this))
    return filteredUserlist[0];
  }

  componentWillMount() {
    this.callApiUserlist()
      .then(userlist => this.setState({ user: this.findCurrentUser(userlist) }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.callApiRoomlist()
      .then(res => this.setState({ roomlist: res }))
      .catch(err => console.log(err));
  }

  render() {
    var user = this.state.user;
    var maxId = 0;
    
    if(this.state.roomlist) {
      var maxRoom = this.state.roomlist[this.state.roomlist.length - 1];
      maxId = maxRoom.roomId;
    }

    var userRooms = [];
    userRooms.push(user.Room1Id);
    userRooms.push(user.Room2Id);
    userRooms.push(user.Room3Id);
    userRooms.push(user.Room4Id);
    userRooms.push(user.Room5Id);
    return (
      <div>
        <Header />
        <Button onClick={function () { //로그인 버튼으로 대체할 생각
          this.props.sendDataToStore('login', user.userId, user.userName, user.userGender, user.userPhone, user.userPW, userRooms, maxId)
        }.bind(this)}>
          유저 정보 전달
        </Button>
        <EmptyCard />
        <Route exact Path="/">
          {this.state.roomlist ? <RoomTab roomlist={this.state.roomlist} /> : ''}
        </Route>
        <Route exact path="/create"><CreateRoom></CreateRoom></Route>
        <Route exact Path="/mytab">
          {this.state.roomlist ? <MyTab roomlist={this.state.roomlist} /> : ''}
        </Route>
        <Route exact path="/profile"><Profile></Profile></Route>
        <Route exact path="/settings"><Setting></Setting></Route>
        <EmptyCard />
        <Footer />
      </div>
    )
  }
}

export default connect(
  function (state) {
    return {
      userId: state.userId
    }
  },
  function (dispatch) {
    return {
      sendDataToStore(type, userId, userName, userGender, userPhone, userPW, userRooms, maxId) {
        dispatch({ type, userId, userName, userGender, userPhone, userPW, userRooms, maxId })
      }
    }
  }
)(App);
