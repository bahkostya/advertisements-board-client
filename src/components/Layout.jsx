import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Login from './Login.jsx';
import { fetchLogout } from '../actions';

import styles from './Layout.scss';


function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
}

@withRouter
@connect(mapStateToProps, { fetchLogout })
export default class Layout extends Component {
    state = {
        dialogOpen: false,
    };

    componentWillUnmount() {
        this.props.fetchLogout();
    }

    handleOpenDialog = () => {
        this.setState({ dialogOpen: true });
    };

    handleCloseDialog = () => {
        this.setState({ dialogOpen: false });
    };

    handleLogout = () => {
        this.props.fetchLogout();
        this.props.history.push('/all');
    }

    render() {
        const containerStyle = {
            top: 64,
            zIndex: 1099,
            width: 250,
        };

        const {
            isLoggedIn,
            children,
        } = this.props;

        return (
            <div>
                <AppBar
                    showMenuIconButton={false}
                    title="Advertisements board"
                />
                <Drawer
                    containerStyle={containerStyle}
                    docked
                >
                    <Link to="/all" className={styles.link}>
                        <MenuItem>All adverts</MenuItem>
                    </Link>
                    {
                        isLoggedIn
                            ? <div>
                                <Link to="/my" className={styles.link}>
                                    <MenuItem>My adverts</MenuItem>
                                </Link>
                                <Link to="/new" className={styles.link}>
                                    <MenuItem>Add new</MenuItem>
                                </Link>
                                <MenuItem onTouchTap={this.handleLogout}>
                                    Logout
                                </MenuItem>
                            </div>
                            : <MenuItem onTouchTap={this.handleOpenDialog}>
                                Login
                            </MenuItem>
                    }
                </Drawer>
                <main className={styles.body}>
                    {children}
                </main>
                <Login
                    open={this.state.dialogOpen}
                    onClose={this.handleCloseDialog}
                />
            </div>
        );
    }
}
