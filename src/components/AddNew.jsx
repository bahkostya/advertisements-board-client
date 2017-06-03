import React, { Component } from 'react';
import AdvertisementForm from './AdvertisementForm.jsx';

export default class AddNew extends Component {
    handlePublish = ({ title, price, description }) => {
        console.log('ADD NEW');
        this.props.history.push('/all');
    }

    render() {
        return (
            <AdvertisementForm
                pageTitle="New advertisement"
                onPublish={this.handlePublish}
            />
        );
    }
}
