import React, { Component } from 'react';
import './App.css';
import Router from './routes';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
            <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
