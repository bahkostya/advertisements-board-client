import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import styles from './AdvertisementForm.scss';


export default class AdvertisementForm extends Component {
    state = {
        inputs: {
            title: this.props.title || '',
            price: this.props.price || '',
            description: this.props.description || '',
        },
        errors: {
            title: '',
            price: '',
            description: '',
        },
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            inputs: {
                ...this.state.inputs,
                [name]: value,
            },
            errors: {
                ...this.state.errors,
                [name]: '',
            },
        });
    };

    handlePublish = e => {
        e.preventDefault();
        e.stopPropagation();

        const { inputs } = this.state;
        let hasError = false;
        const errors = {};

        Object.keys(inputs).forEach(key => {
            if (inputs[key] === '') {
                hasError = true;
                errors[key] = `Please enter ${key}.`;
            } else {
                errors[key] = '';
            }
        });

        this.setState({
            errors,
        });

        if (!hasError) {
            this.props.onPublish(inputs);
        }
    }

    render() {
        const { errors, inputs } = this.state;

        const paperStyle = {
            width: '100%',
            padding: '0px 24px 16px',
            marginTop: 16,
        };

        return (
            <div className={styles.root}>
                <h2 className={styles.heading}>{this.props.pageTitle}</h2>
                <Paper style={paperStyle} zDepth={1} rounded={false}>
                    <TextField
                        hintText="Type here what you want to sell"
                        floatingLabelText="Title of item to sell"
                        style={{ width: '55%', minWidth: 300 }}
                        name="title"
                        errorText={errors.title}
                        value={inputs.title}
                        onChange={this.handleChange}
                    />
                    <TextField
                        floatingLabelText="Price"
                        style={{ width: '55%', minWidth: 300 }}
                        type="number"
                        step="0.01"
                        name="price"
                        errorText={errors.price}
                        value={inputs.price}
                        onChange={this.handleChange}
                    />
                    <TextField
                        hintText="Type here description to the advertisement"
                        floatingLabelText="Description of item"
                        fullWidth
                        multiLine
                        name="description"
                        errorText={errors.description}
                        value={inputs.description}
                        onChange={this.handleChange}
                    />
                    <RaisedButton
                        label="Publish"
                        style={{ margin: '24px auto 0', width: 180 }}
                        primary
                        onTouchTap={this.handlePublish}
                    />
                </Paper>
            </div>
        );
    }
}
