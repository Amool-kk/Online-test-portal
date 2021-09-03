import React, { useReducer, createContect, useState, createContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './component/home';
import Exam from './component/exam';
// import Result from './component/result';

export const UserContext = createContext();

const Rounting = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/:name" component={Exam} />
      {/* <Route exact path="/:result" component={Result} /> */}
    </Switch>
  )
}

function App() {
  return (
    <>
      <UserContext.Provider >
        <Rounting/>
      </UserContext.Provider>
    </>
  );
}

export default App;
