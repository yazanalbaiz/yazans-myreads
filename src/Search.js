import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class Search extends Component {
    displayBooks = () => {
      if (this.props.results.length > 0) {
        return this.props.results.map(book => 
            (
              <li key={book.id}>
                <Book
                  book={book}
                  handleSelect={this.props.handleSelect}
                />
              </li>
          )
        )
      } else {
        return <span>No Results Found</span>;
      }
    }
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  value={this.props.query} 
                  onChange={this.props.handleInput}
                  type="text" 
                  placeholder="Search by title or author"
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.displayBooks()}
              </ol>
            </div>
          </div>
        );
    }
}

Search.propTypes = {
  query: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  results: PropTypes.array,
  handleSelect: PropTypes.func
}

export default Search;