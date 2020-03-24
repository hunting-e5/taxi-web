import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';

class MyRoomList extends Component {
    render() {
        var myRooms = this.props.roomlist.filter(function (room) {
            if (this.props.userRooms.indexOf(room.id) > -1) return true;
            else return false;
        }.bind(this));
        
        var myRoomList = myRooms.map(function (myRoom) {
            var numOfjoinedUsers = 0;
            if(myRoom.p1Id !== null) numOfjoinedUsers++;
            if(myRoom.p2Id !== null) numOfjoinedUsers++;
            if(myRoom.p3Id !== null) numOfjoinedUsers++;
            if(myRoom.p4Id !== null) numOfjoinedUsers++;
            if(myRoom.p5Id !== null) numOfjoinedUsers++;
            return (
                <Card>
                    <CardHeader title={"출발지: " + myRoom.dep + " 목적지: " + myRoom.dest}
                        subtitle={" 현재 인원: " + numOfjoinedUsers + "/" + myRoom.maxNum} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        {/* <Button onClick={function () {
                            this.props.onClick('quit', myRoom.id);
                        }.bind(this)}>
                            방 나가기
                        </Button> */}
                    </CardActions>
                    <CardText expandable={true}>{myRoom.desc}</CardText>
                </Card>
            )
        }.bind(this));

        return(
            <MuiThemeProvider>
                { myRoomList }
            </MuiThemeProvider >
        );
    }
}

export default connect(
    function (state) {
        return {
            userRooms: state.myRooms
        }
    },
    function (dispatch) {
        return {
            onClick(type, roomId) {
                dispatch({ type, roomId })
            }
        }
    }
)(MyRoomList);