import React, { Component } from 'react';
import Card from './Card.jsx';

export default class OwnAdvertisements extends Component {
    handleEdit = id => {
        this.props.history.push(`/edit/${id}`);
    }

    render() {
        const ads = [1, 2, 3, 4, 5];

        return (
            <div style={{ flex: '1 1 100%' }}>
                {
                    ads.map((val, i) => (
                        <Card
                            key={val}
                            id={i}
                            title="Book"
                            price={25}
                            description={`Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                 et dolore magna aliqua. Ut enim ad minim veniam, quis
                                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                  commodo consequat. Duis aute irure dolor in reprehenderit
                                  in voluptate velit esse cillum dolore eu fugiat nulla
                                  pariatur. Excepteur sint occaecat cupidatat non proident,
                                  sunt in culpa qui officia deserunt mollit anim id est
                                  laborum.`}
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
