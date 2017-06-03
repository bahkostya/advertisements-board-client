import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import styles from './Layout.scss';


export default function (props) {
    const containerStyle = {
        top: 64,
        zIndex: 1099,
        width: 250,
    };

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
                <Link to="/my" className={styles.link}>
                    <MenuItem>My adverts</MenuItem>
                </Link>
                <Link to="/new" className={styles.link}>
                    <MenuItem>Add new</MenuItem>
                </Link>
            </Drawer>
            <main className={styles.body}>
                {props.children}
            </main>
        </div>
    );
}
