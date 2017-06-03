import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';


const defaultState = {
    activeTab: 0,
    login: {
        email: '',
        password: '',
    },
    signUp: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        telephone: '',
    },
    errors: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        telephone: '',
    },
};

@withRouter
export default class AdvertisementForm extends Component {
    state = { ...defaultState }

    componentWillReceiveProps() {
        this.setState({
            ...defaultState,
        });
    }

    handleChangeTab = value => {
        this.setState({
            activeTab: value,
            login: {
                email: '',
                password: '',
            },
            signUp: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                telephone: '',
            },
            errors: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                telephone: '',
            },
        });
    };

    handleClose = () => {
        this.props.onClose();
    }

    handleChange = e => {
        const { name, value } = e.target;
        const tab = this.state.activeTab ? 'signUp' : 'login';

        this.setState({
            [tab]: {
                ...this.state[tab],
                [name]: value,
            },
            errors: {
                ...this.state.errors,
                [name]: '',
            },
        });
    }

    handleLogin = () => {
        const tab = this.state.activeTab ? this.state.signUp : this.state.login;
        let hasError = false;
        const errors = {};
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const telephoneRegex = /^\+[0-9]{12}$/;

        Object.keys(tab).forEach(key => {
            if (tab[key] === '') {
                hasError = true;
                errors[key] = `Please enter ${key}.`;
            } else {
                errors[key] = '';
            }
        });

        if (!emailRegex.test(tab.email)) {
            hasError = true;
            errors.email = 'Please enter correct email';
        }

        if (Object.prototype.hasOwnProperty.call(tab, 'telephone') &&
            !telephoneRegex.test(tab.telephone)) {
            hasError = true;
            errors.telephone = 'Please enter correct telephone number';
        }

        this.setState({
            errors,
        });

        if (!hasError) {
            this.handleClose();
            this.props.history.push('/my');
        }
    }

    render() {
        const {
            errors,
            login,
            signUp,
            activeTab,
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
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
                bodyStyle={{ padding: 0 }}
                contentStyle={{ maxWidth: 600 }}
                repositionOnUpdate
                autoDetectWindowHeight
            >
                <Tabs
                    onChange={this.handleChangeTab}
                    value={activeTab}
                    tabTemplateStyle={{ padding: '0 36px 8px' }}
                >
                    <Tab
                        label="Login"
                        value={0}
                    >
                        <TextField
                            hintText="Enter your email here"
                            floatingLabelText="Email"
                            fullWidth
                            name="email"
                            type="email"
                            errorText={errors.email}
                            value={login.email}
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
                    </Tab>
                    <Tab
                        label="Sign up"
                        value={1}
                    >
                        <TextField
                            hintText="Enter your email here"
                            floatingLabelText="Email"
                            fullWidth
                            name="email"
                            type="email"
                            errorText={errors.email}
                            value={signUp.email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            hintText="Enter your password here"
                            floatingLabelText="Password"
                            fullWidth
                            name="password"
                            type="password"
                            errorText={errors.password}
                            value={signUp.password}
                            onChange={this.handleChange}
                        />
                        <TextField
                            hintText="Enter your first name"
                            floatingLabelText="First name"
                            fullWidth
                            name="firstName"
                            type="text"
                            errorText={errors.firstName}
                            value={signUp.firstName}
                            onChange={this.handleChange}
                        />
                        <TextField
                            hintText="Enter your last name"
                            floatingLabelText="lastName"
                            fullWidth
                            name="lastName"
                            type="text"
                            errorText={errors.lastName}
                            value={signUp.lastName}
                            onChange={this.handleChange}
                        />
                        <TextField
                            hintText="+ 00 000 000 00 00"
                            floatingLabelText="Telephone number"
                            fullWidth
                            name="telephone"
                            type="tel"
                            errorText={errors.telephone}
                            value={signUp.telephone}
                            onChange={this.handleChange}
                        />
                    </Tab>
                </Tabs>
            </Dialog>
        );
    }
}
