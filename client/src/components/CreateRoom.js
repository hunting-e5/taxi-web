import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, TextField } from 'material-ui';
import { NavLink, } from 'react-router-dom'

const axios = require('axios').default;

class CreateRoom extends Component {
    render() {
        var dep, dest, maxNum, desc;
        return (
            <MuiThemeProvider>
                {/*}
                <TextField floatingLabelText="작성자" onChange={function (e, text) {
                    writer = text
                }} /><br />
                */}
                <TextField floatingLabelText="출발지" onChange={function (e, text) {
                    dep = text
                }} /><br />
                <TextField floatingLabelText="목적지" onChange={function (e, text) {
                    dest = text
                }} /><br />
                <TextField floatingLabelText="추가정보" onChange={function (e, text) {
                    desc = text
                }} /><br />
                <TextField floatingLabelText="최대인원" onChange={function (e, text) {
                    maxNum = Number(text)
                }} /><br />
                <NavLink exact to={'/'}>
                    <RaisedButton label="방 개설" onClick={function () {
                        var emptyRoom = -1;
                        if (dep !== undefined && dest !== undefined && maxNum !== undefined && !isNaN(maxNum)) {
                            if (desc === undefined) {
                                desc = '추가정보 없음';
                            }
                            axios.post('/api/roomlist', {
                                dep: dep,
                                dest: dest,
                                maxNum: maxNum,
                                desc: desc,
                                writer: this.props.userId,
                            });

                            for (var i = 0; i < this.props.userRooms.length; i++) {
                                if (this.props.userRooms[i] === null) {
                                    emptyRoom = i + 1;
                                    break;
                                }   
                            }
                            if (emptyRoom === -1) window.alert('들어갈 수 있는 방이 없습니다!')
                            else {
                                axios.post('/api/userlist', {
                                    emptyRoom : emptyRoom,
                                    roomId: this.props.maxId + 1,
                                    userId: this.props.userId,
                                });
                            }
                        } else window.alert('다시 입력하세요!');
                    }.bind(this)} />
                </NavLink>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function (state) {
        return {
            userId: state.userId,
            maxId: state.maxId,
            userRooms: state.userRooms,
        }
    },
    function (dispatch) {
        return {
            onClick: function (mode, writer, dep, dest, desc, maxNum) {
                dispatch({ type: mode, writer, dep, dest, desc, maxNum })
            }
        }
    }
)(CreateRoom);
