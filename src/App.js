import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './Library'
import Search from './Search';
import * as api from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentWillMount = async () => {
    api.getAll()
      .then(books => this.setState({ books }));
  }
  
  handleSelect = (book, shelf) => {
    api.update(book, shelf)
      .then(() => {
        api.getAll()
          .then(books => this.setState({ books }));
      });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Library 
            handleSelect={this.handleSelect}
            books={this.state.books}
          />
        )}/>
        <Route exact path="/search" render={() => (
          <Search/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
