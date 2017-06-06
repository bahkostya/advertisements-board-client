import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main.jsx';
import AddNew from './AddNew.jsx';
import Edit from './Edit.jsx';
import OwnAdvertisements from './OwnAdvertisements.jsx';

const Routes = () => (
    <Switch>
        <Route render={() => <Redirect to="/all" />} exact path="/" />
        <Route component={Main} exact path="/all" />
        <Route component={OwnAdvertisements} exact path="/my" />
        <Route component={AddNew} exact path="/new" />
        <Route component={Edit} exact path="/edit/:id" />
        <Route component={() => <div>NOT FOUND</div>} path="*" />
    </Switch>
);

export default Routes;
