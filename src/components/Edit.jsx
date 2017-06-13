import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { fetchEditAdvertisement } from '../actions';
import AdvertisementForm from './AdvertisementForm.jsx';


function mapStateToProps(state) {
    return {
        myAdvertisements: state.advertisements.ownData,
        isLoggedIn: state.user.isLoggedIn,
    };
}

@withRouter
@connect(mapStateToProps, { fetchEditAdvertisement })
export default class Edit extends Component {
    handlePublish = ({ title, price, description }) => {
        const id = this.props.match.params.id;

        this.props.fetchEditAdvertisement(id, title, price, description);
        setTimeout(() => {
            this.props.history.push('/my');
        }, 100);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/all" />;
        }

        const id = this.props.match.params.id;
        const adToEdit = this.props.myAdvertisements.find(ad => ad.id === +id);

        return (
            <AdvertisementForm
                pageTitle="Edit advertisement"
                title={adToEdit.name}
                price={adToEdit.price}
                description={adToEdit.description}
                onPublish={this.handlePublish}
                onEdit={this.handleEdit}
            />
        );
    }
}
