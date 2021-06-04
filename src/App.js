import React from 'react';
import AppRoute from './router/appRouter'
import './App.css';


// redux
import {Provider} from 'react-redux'
import store from './store/store'

const  App=()=> {
  return (
    <Provider store={store}>
    <AppRoute /> 

  </Provider>
  );
}

export default App;
