import React, { Component } from 'react';

import styles from './AddNew.scss';


export default class AddNew extends Component {
    render() {
        return (
            <div className={styles.root}>
                <h2 className={styles.heading}>New advertisement</h2>
            </div>
        );
    }
}
