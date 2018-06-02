import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import Library from './Library'
import Search from './Search';
import * as api from './BooksAPI';

class BooksApp extends React.Component {
  //My app maintains one store as state for all components mimicing redux
  //I would've used redux but I had no time
  state = {
    books: [],
    query: '',
    searchItems: []
  }

  componentDidMount = async () => {
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

  handleInput = (e) => {
    const query = e.target.value.trim();
    this.setState({ query });
    if (query !== '') {
      api.search(query)
      .then(async searchItems => {
        if (!searchItems.error) this.setState({ searchItems });
      });
    } else {
      this.setState({ searchItems: [] })
    }
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
          <Search
            query={this.state.query}
            handleInput={this.handleInput}
            results={this.state.searchItems}
            handleSelect={this.handleSelect}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp;
