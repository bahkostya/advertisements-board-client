import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card.jsx';
import { fetchAllAdvertisements } from '../actions';


function mapStateToProps(state) {
    return {
        advertisements: state.advertisements.data,
    };
}

@connect(mapStateToProps, { fetchAllAdvertisements })
export default class Main extends Component {
    componentDidMount() {
        this.props.fetchAllAdvertisements();
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
                            seller={`${ad.user.name} ${ad.user.surname}`}
                            telephone={ad.user.phone}
                        />
                    ))
                }
            </div>
        );
    }
}
