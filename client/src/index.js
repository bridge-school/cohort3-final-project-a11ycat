import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from './features/app/app.container';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import {GoogleMap} from './features/google-map/google-map.component';
import {LocationRatingContainer} from './features/location-rating/location-rating.container';
import './index.css';
import reducer from './reducers';

if (process.env.NODE_ENV === 'development') {
  const a11y = require('react-a11y').default
  a11y(React, ReactDOM, {
    rules: {
			'button-role-space':'warn',
			'hidden-uses-tabindex':'warn',
			'img-uses-alt':'warn',
			'label-uses-for':'warn',
			'mouse-events-map-to-key-events':'warn',
			'no-access-key':'warn',
			'no-hash-ref':'warn',
			'no-unsupported-elements-use-aria':'warn',
			'onclick-uses-role':'warn',
			'onclick-uses-tabindex':'warn',
			'redundant-alt':'warn',
			'tabindex-uses-button':'warn',
			'use-onblur-not-onchange':'warn',
			'valid-aria-role':'warn'
    }
  })
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/Map" component={GoogleMap}/>
      <Route path="/RateLocation" component={LocationRatingContainer}/>
      <Route path="/" component={AppContainer}/>
    </Switch>
  </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
