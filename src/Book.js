import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class Book extends Component {

    render() {
        const { title, authors, status, cover } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>
                    <Dropdown status={status} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.map((author, index) => (
                    <span>{ author } {index < authors.length - 1 && ( <span>& </span> )}</span>
                ))}</div>
            </div>
        )
    }
}

Book.propTypes = {
    cover: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired
};

export default Book;