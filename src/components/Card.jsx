import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import styles from './Card.scss';

export default class AdvertisementForm extends Component {
    handleEdit = () => {
        this.props.onEdit(this.props.id);
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        const {
            title,
            price,
            description,
            seller,
            telephone,
            isOwner,
        } = this.props;

        return (
            <Card style={{ width: '100%', marginBottom: 16 }}>
                <CardHeader
                    title={title}
                    subtitle={`Price: $${price}`}
                    actAsExpander
                    showExpandableButton
                />
                {
                    isOwner &&
                        <CardActions>
                            <FlatButton
                                label="Edit"
                                onTouchTap={this.handleEdit}
                                primary
                            />
                            <FlatButton
                                label="Delete"
                                onTouchTap={this.handleDelete}
                                secondary
                            />
                        </CardActions>
                }
                <CardText expandable>
                    <div className={styles.subtitle}>Description</div>
                    {description}
                    {
                        !isOwner &&
                            <div>
                                <div className={styles.divider}><Divider /></div>
                                <div>
                                    <span className={styles.subtitle}>Seller: </span>
                                    {seller}
                                </div>
                                <div>
                                    <span className={styles.subtitle}>Telephone: </span>
                                    {telephone}
                                </div>
                            </div>
                    }
                </CardText>
            </Card>
        );
    }
}
