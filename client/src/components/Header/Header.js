import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import EmptyCard from '../EmptyCard'
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CSSBaseLine';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        top: '0',
        width: '100%',
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.up('sm')]: {},
        textDecoration: 'none',
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Header() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.root}>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            className={classes.title}
                            noWrap
                            component={NavLink} to='/'>
                            카택전
                        </Typography>

                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            onClick={handleMenu}
                            color="inherit"
                            component={NavLink} to='/'
                            edge='end'
                        >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>

        </React.Fragment>
    );
}

export default connect(
    null,
    function (dispatch) {
        return {
            onClick: function (mode) {
                dispatch({ type: mode });
            }
        }
    }
)(Header);
