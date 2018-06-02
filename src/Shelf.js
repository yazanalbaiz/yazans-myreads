import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => (
                            <Book 
                                book={book}
                                key={book.id}
                                handleSelect={this.props.handleSelect}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    handleSelect: PropTypes.func.isRequired
}

export default Shelf;