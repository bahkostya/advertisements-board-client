import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main.jsx';
import AddNew from './AddNew.jsx';

const Routes = () => (
    <Switch>
        <Route component={Main} exec path="/all" />
        <Route component={AddNew} exec path="/new" />
    </Switch>
);

export default Routes;
