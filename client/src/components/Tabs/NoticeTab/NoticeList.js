import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class NoticeList extends Component {
    render() {
        var noticelist = this.props.notices.map(function (notice) {
            return (
                <Card>
                    <CardHeader title={notice.title} desc={notice.desc} actAsExpander={true} showExpandableButton={true} />
                    <CardActions>
                        <FlatButton label="상세보기" />
                    </CardActions>
                    <CardText expandable={true}>추가정보</CardText>
                </Card>
            )
        }.bind(this));

        return (
            <MuiThemeProvider>
                {noticelist}
            </MuiThemeProvider>
        );
    }
}

export default connect(
    function (state) {
        return {
            notices: state.notice,
            selectedId: state.selectedId
        }
    },
    function (dispatch) {
        return {
            onClick: function (mode, id) {
                dispatch({ type: mode, id });
            }
        }
    }
)(NoticeList);