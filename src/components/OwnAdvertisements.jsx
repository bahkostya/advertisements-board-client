import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card.jsx';
import { fetchMyAdvertisements } from '../actions';


function mapStateToProps(state) {
    return {
        advertisements: state.advertisements.ownData,
    };
}

@connect(mapStateToProps, { fetchMyAdvertisements })
export default class OwnAdvertisements extends Component {
    componentDidMount() {
        this.props.fetchMyAdvertisements();
    }

    handleEdit = id => {
        this.props.history.push(`/edit/${id}`);
    }

    render() {
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
                        />
                    ))
                }
            </div>
        );
    }
}
