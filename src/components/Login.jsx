import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { fetchLogin } from '../actions';


const defaultState = {
    activeTab: 0,
    login: {
        telephone: '',
        password: '',
    },
    errors: {
        telephone: '',
        password: '',
        message: '',
    },
};

@withRouter
@connect(null, { fetchLogin })
export default class AdvertisementForm extends Component {
    state = { ...defaultState }

    componentWillReceiveProps() {
        this.setState({
            ...defaultState,
        });
    }

    handleClose = () => {
        this.props.onClose();
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            login: {
                ...this.state.login,
                [name]: value,
            },
            errors: {
                ...this.state.errors,
                [name]: '',
            },
        });
    }

    handleLogin = async () => {
        let hasError = false;
        const errors = {};
        const telephoneRegex = /^\+[0-9]{12}$/;

        Object.keys(this.state.login).forEach(key => {
            if (this.state.login[key] === '') {
                hasError = true;
                errors[key] = `Please enter ${key}.`;
            } else {
                errors[key] = '';
            }
        });

        if (Object.prototype.hasOwnProperty.call(this.state.login, 'telephone') &&
            !telephoneRegex.test(this.state.login.telephone)) {
            hasError = true;
            errors.telephone = 'Please enter correct telephone number';
        }

        this.setState({
            errors,
        });

        if (!hasError) {
            const { telephone, password } = this.state.login;
            const loginResponse = await this.props.fetchLogin(telephone, password);

            if (loginResponse) {
                this.handleClose();
                this.props.history.push('/my');
            } else {
                this.setState({
                    errors: {
                        ...this.state.errors,
                        message: true,
                    },
                });
            }
        }
    }

    render() {
        const {
            errors,
            login,
        } = this.state;

        const actions = [
            <FlatButton
                label="Cancel"
                secondary
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary
                onTouchTap={this.handleLogin}
            />,
        ];


        return (
            <Dialog
                title="LOGIN"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
                contentStyle={{ maxWidth: 600 }}
                repositionOnUpdate
                autoDetectWindowHeight
            >
                <TextField
                    hintText="+ 00 000 000 00 00"
                    floatingLabelText="Telephone number"
                    fullWidth
                    name="telephone"
                    type="tel"
                    errorText={errors.telephone}
                    value={login.telephone}
                    onChange={this.handleChange}
                />
                <TextField
                    hintText="Enter your password here"
                    floatingLabelText="Password"
                    fullWidth
                    name="password"
                    type="password"
                    errorText={errors.password}
                    value={login.password}
                    onChange={this.handleChange}
                />
                {
                    errors.message &&
                    <div
                        style={{
                            bottom: 15,
                            fontSize: 12,
                            lineHeight: '24px',
                            color: 'rgb(244, 67, 54)',
                        }}
                    >
                        Telephone or password is incorrect!
                    </div>
                }
            </Dialog>
        );
    }
}
