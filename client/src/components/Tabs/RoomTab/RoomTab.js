import React from 'react';
import RoomList from './RoomList'
import CreateButton from './CreateButton';

class RoomTab extends React.Component {
    render(){
        return (
            <div>
                <RoomList id={this.props.id} dep = {this.props.dep} dest={this.props.dest} maxNum={this.props.maxNum} desc={this.props.desc} />
                <CreateButton></CreateButton>
            </div>
        );
    }
};

export default RoomTab;