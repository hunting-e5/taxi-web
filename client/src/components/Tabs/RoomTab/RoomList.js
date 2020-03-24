import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';

class RoomList extends Component {
    render() {
        var currentRooms = this.props.roomlist.filter(function (room){
            if(room.isDeleted === 0) return true;
            else return false;
        })
        // console.log(currentRooms);
        
        var roomlist = currentRooms.map(function (room){
            return (
                <Card>
                    <CardHeader
                        title={"출발지: " + room.dep + " 목적지: " + room.dest}
                        subtitle={" 현재 인원: " + "TBD" + "/" + room.maxNum} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        {/*
                        <Button disabled = {this.props.myRooms.indexOf(room) > -1 ? true : false} onClick = {function(){
                            this.props.onClick('join', this.props.roomId);
                        }.bind(this)}>
                            참가
                        </Button>
                        */}
                        <Button onClick={function () {
                            const url = '/api/roomlist/'+room.roomId;
                            fetch(url, {
                                method: 'DELETE'
                            });
                            window.location.reload();
                        }.bind(this)}>
                            방 삭제
                        </Button>
                    </CardActions>       
                    <CardText expandable={true}>{room.desc}</CardText>
                </Card>
            )
        })
            
        return (
            <MuiThemeProvider>
                {roomlist}
            </MuiThemeProvider>
        );
    }
}

export default RoomList;
