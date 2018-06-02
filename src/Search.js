import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class Search extends Component {
  //This method only displays the books if there are any
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
        return <span>No Results</span>;
      }
    }
    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
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