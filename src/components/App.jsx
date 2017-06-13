import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Layout from './Layout.jsx';
import Routes from './Routes.jsx';

injectTapEventPlugin();

export default () => (
    <Layout>
        <Routes />
    </Layout>
);
