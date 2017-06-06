import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Card from './Card.jsx';
import { fetchMyAdvertisements, fetchDeleteAdvertisement } from '../actions';


function mapStateToProps(state) {
    return {
        advertisements: state.advertisements.ownData,
        isLoggedIn: state.user.isLoggedIn,
    };
}

@withRouter
@connect(mapStateToProps, { fetchMyAdvertisements, fetchDeleteAdvertisement })
export default class OwnAdvertisements extends Component {
    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.fetchMyAdvertisements();
        }
    }

    handleDelete = id => {
        this.props.fetchDeleteAdvertisement(id);
    }

    handleEdit = id => {
        this.props.history.push(`/edit/${id}`);
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect to="/all" />;
        }

        return (
            <div style={{ flex: '1 1 100%' }}>
                {
                    this.props.advertisements.map(ad => (
                        <Card
                            key={ad.id}
                            id={ad.id}
                            title={ad.name}
                            price={ad.price}
                            description={ad.description}
                            seller="Bob"
                            telephone="+380637131296"
                            isOwner
                            onEdit={this.handleEdit}
                            onDelete={this.handleDelete}
                        />
                    ))
                }
            </div>
        );
    }
}
