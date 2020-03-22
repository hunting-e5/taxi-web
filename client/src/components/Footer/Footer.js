import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RoomTabIcon from '@material-ui/icons/HouseRounded';
import MyTabIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: '0'
    },
});

export default function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >

            <BottomNavigationAction
                component={NavLink}
                to="/"
                label="방 목록"
                value="RoomTab"
                icon={<RoomTabIcon />}
                className={classes.content} />
            <BottomNavigationAction
                component={NavLink}
                to="/mytab"
                label="내 방"
                value="MyTab"
                icon={<MyTabIcon />}
                className={classes.content} />

            <BottomNavigationAction
                component={NavLink}
                to="/settings"
                label="설정"
                value="settings"
                icon={<SettingsIcon />}
                className={classes.content}

            />
        </BottomNavigation>
    )
}

