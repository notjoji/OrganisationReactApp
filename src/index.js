import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createBrowserHistory} from 'history'
import {Provider} from 'react-redux';
import store from "./store";
import "regenerator-runtime/runtime.js";

export const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();

