import React, { Component } from 'react';
import MyRoomList from './MyRoomList';

class MyTab extends Component{
    render(){
        return (
            <div>
                <MyRoomList roomlist = {this.props.roomlist} />
            </div>
        );
    }
}

export default MyTab;