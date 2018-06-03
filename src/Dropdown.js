import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {
    //This method passes the book and the shelf value to the handler
    onSelect = (e) => {
        this.props.handleSelect(this.props.book, e.target.value);
        console.log(this.props.book.id)
    }

    render() {
        const { status = 'none' } = this.props;

        return (
            <div className="book-shelf-changer">
                <select value={status} onChange={this.onSelect}>
                    <option value="moveTo" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

Dropdown.propTypes = {
    status: PropTypes.string,
    book: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
}

export default Dropdown;