import React, { Component } from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';

class MyRoomList extends Component {
    render() {
        var myRoomList = this.props.myRooms.map(function (myRoom) {
            return (
                <Card>
                    <CardHeader title={"출발지: " + myRoom.dep + " 목적지: " + myRoom.dest} 
                    subtitle={"작성자: " + myRoom.writer+ " 현재 인원: "+myRoom.joinedUsers.length+"/"+myRoom.maxNum} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        <Button onClick = {function(){
                            this.props.onClick('quit', myRoom.id);
                        }.bind(this)}>
                            방 나가기
                        </Button>
                    </CardActions>
                    <CardText expandable={true}>추가정보</CardText>
                </Card>
            )
        }.bind(this));
        return (
            <MuiThemeProvider>
                {myRoomList}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function(state){
        return{
            myRooms: state.myRooms
        }
    },
    function(dispatch){
        return{
            onClick(type, roomId){
                dispatch({type, roomId})
            }
        }
    }
)(MyRoomList);