import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Button from '@material-ui/core/Button';


class RoomList extends Component {
    render() {
        var roomlist = 
            <Card>
                <CardHeader
                    title={"출발지: " + this.props.dep + " 목적지: " + this.props.dest}
                    subtitle={" 현재 인원: " + "TBD" + "/" + this.props.maxNum} actAsExpander={true} showExpandableButton={true} />
                
                
                <CardActions>
                    {/*
                    <Button disabled = {this.props.myRooms.indexOf(room) > -1 ? true : false} onClick = {function(){
                        this.props.onClick('join', this.props.roomId);
                    }.bind(this)}>
                        참가
                    </Button>
                    */}
                    <Button onClick={function () {
                        const url = '/api/roomlist/' + this.props.id;
                        fetch(url, {
                            method: 'DELETE'
                        });
                        window.location.reload();
                    }.bind(this)}>
                        방 삭제
                    </Button>
                </CardActions>
                
                
                <CardText expandable={true}>{this.props.desc}</CardText>
            </Card>

        return (
            <MuiThemeProvider>
                {roomlist}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function (state) {
        return {
            rooms: state.rooms,
            myRooms: state.myRooms,
            userId: state.userId
        }
    },
    function (dispatch) {
        return {
            onClick: function (type, roomId) {
                dispatch({ type, roomId });
            }
        }
    }
)(RoomList);
