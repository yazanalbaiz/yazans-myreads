import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './Library'
import Search from './Search';
import * as api from './BooksAPI';

class BooksApp extends React.Component {
  state = {
  }

  componentWillMount = () => {
    api.getAll()
      .then(books => this.setState({ books }));
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

export default BooksApp;
