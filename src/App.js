import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './Library'
import Search from './Search';

class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Library/>
        )}/>
        <Route exact path="/search" render={() => (
          <Search/>
        )} />
      </div>
    )
  }
}

export default BooksApp
