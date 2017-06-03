import React, { Component } from 'react';
import AdvertisementForm from './AdvertisementForm.jsx';

export default class Edit extends Component {
    handlePublish = ({ title, price, description }) => {
        console.log('EDIT');
        this.props.history.push('/all');
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <AdvertisementForm
                pageTitle="Edit advertisement"
                onPublish={this.handlePublish}
                onEdit={this.handleEdit}
            />
        );
    }
}
