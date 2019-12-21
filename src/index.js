import React from 'react';

import './config/reactotronConfig';
import Routes from './routes';

import { Provider } from 'react-redux';
import store from './redux/store';

export default function App()
{
    return (
    <Provider store={store}>
        <Routes/>
    </Provider>
    );
}