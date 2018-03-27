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
