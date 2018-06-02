import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

class Book extends Component {

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.cover }}></div>
                    <Dropdown status={this.props.status} />
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.author}</div>
            </div>
        )
    }
}

Book.propTypes = {
    cover: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Book;