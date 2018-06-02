import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class Book extends Component {

    render() {
        const { title, authors, shelf } = this.props.book;
        const { thumbnail } = this.props.book.imageLinks;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <Dropdown book={this.props.book} handleSelect={this.props.handleSelect} status={shelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.map((author, index) => (
                    <span key={ index }>{ author } {index < authors.length - 1 && ( <span>& </span> )}</span>
                ))}</div>
            </div>
        )
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default Book;