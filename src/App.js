import React, { Component } from 'react';
import PomodoroCard from './Component/index';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PomodoroCard />
      </Provider>
    );
  }
}

export default App;