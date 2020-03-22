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

class App extends Component {
  state = {
    user: '',
    roomlist: '',
  }

  componentDidMount(){
    this.callApi()
      .then(res =>this.setState({roomlist: res}))
      .catch(err => console.log(err));
  }
  callApi = async() => {
    const response = await fetch('/api/roomlist');
    const body = await response.json();
    return body;
  }
  
  render() {
    return (
      <div>
        <Header />
        <EmptyCard />
        <Route exact path="/">
          {this.state.roomlist ? this.state.roomlist.map(c=>{
            return <RoomTab id={c.roomId} dep={c.dep} dest={c.dest} maxNum={c.maxNum} desc={c.desc} />
          }): ''}
        </Route>
        <Route exact path="/create"><CreateRoom></CreateRoom></Route>
        <Route exact path="/mytab"><MyTab></MyTab></Route>
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
      mode: state.mode
    }
  }
)(App);
