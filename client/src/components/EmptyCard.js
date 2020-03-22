import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

var cardStyle = {
    display: 'block',
    width: '100%',
    height: '5vw'
}

export default function HiddenCard() {
    return (
        <Card variant="outlined" style={cardStyle}>
            <CardHeader/>
        </Card>
    );
}
// 나중에는 room 갯수에 따라 emptyCard 렌더할지 말지 정해줘야 함
