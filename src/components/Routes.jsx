import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main.jsx';
import AddNew from './AddNew.jsx';
import Edit from './Edit.jsx';
import OwnAdvertisements from './OwnAdvertisements.jsx';

const Routes = () => (
    <Switch>
        <Route component={Main} exec path="/all" />
        <Route component={OwnAdvertisements} exec path="/my" />
        <Route component={AddNew} exec path="/new" />
        <Route component={Edit} exec path="/edit/:id" />
        <Route component={() => <div>NOT FOUND</div>} path="*" />
    </Switch>
);

export default Routes;
