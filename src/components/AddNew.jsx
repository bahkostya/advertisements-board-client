import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { fetchPublishAdvertisement } from '../actions';
import AdvertisementForm from './AdvertisementForm.jsx';


function mapStateToProps(state) {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
}

@withRouter
@connect(mapStateToProps, { fetchPublishAdvertisement })
export default class AddNew extends Component {
    handlePublish = ({ title, price, description }) => {
        this.props.fetchPublishAdvertisement(title, price, description);
        setTimeout(() => {
            this.props.history.push('/my');
        }, 100);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/all" />;
        }

        return (
            <AdvertisementForm
                pageTitle="New advertisement"
                onPublish={this.handlePublish}
            />
        );
    }
}
