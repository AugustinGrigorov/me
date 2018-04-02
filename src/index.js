import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ExcludeBrowser from 'react-exclude-browser';
import thunk from 'redux-thunk';
import App from './App';
import UnsupportedBrowserMessage from './components/UnsupportedBrowserMessage';
import reducer from './reducers';
import './index.css';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

render(
  <ExcludeBrowser
    excludedBrowsers={[
      { name: 'ie' },
    ]}
    unsupportedBrowserMessage={UnsupportedBrowserMessage}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </ExcludeBrowser>,
  document.getElementById('root'),
);
