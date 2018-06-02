import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Make it a shelves compnent holder
import Shelf from './Shelf';
import PropTypes from 'prop-types';

class Library extends Component {

    render() {
        return(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books={this.props.books} title='Currently Reading' />
              <Shelf books={this.props.books} title='Want to Read' />
              <Shelf books={this.props.books} title='Read' />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
        );
    }
}

Library.propTypes = {
  books: PropTypes.array.isRequired,
}

export default Library;