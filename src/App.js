import React from 'react';

import './App.css';
import Full from './Pages/Full';
import {HashRouter , Switch , Route} from 'react-router-dom'
import Router from './Router/index'

function App() {
  return (
    <HashRouter>
    <Switch>
      {
        Router.map((item)=>{
          return <Route 
          path = {item.path}
          component = {item.component}
          exact = {item.exact || false}
          />
        })
      }
    </Switch>
  </HashRouter>
  );
}

export default App;
