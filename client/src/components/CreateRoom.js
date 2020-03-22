import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton, TextField } from 'material-ui';
import { NavLink, Link } from 'react-router-dom'
import { HardwareDesktopWindows } from 'material-ui/svg-icons';

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
                        if (dep !== undefined && dest !== undefined && maxNum !== undefined) {
                            if (desc === undefined) {
                                desc = '추가정보 없음';
                            }
                            console.log("maxNum:", maxNum);
                            axios.post('/api/roomlist', {
                                dep: dep,
                                dest: dest,
                                maxNum: maxNum,
                                desc: desc,
                                writer: '3000'
                            });
                        } else {
                            window.alert('다시 입력하세요!');
                        }
                    }.bind(this)} />
                </NavLink>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    null,
    function (dispatch) {
        return {
            onClick: function (mode, writer, dep, dest, desc, maxNum) {
                dispatch({ type: mode, writer, dep, dest, desc, maxNum })
            }
        }
    }
)(CreateRoom);
