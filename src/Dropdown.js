import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dropdown extends Component {

    onSelect = (e) => {
        this.props.handleSelect(this.props.book, e.target.value);
    }

    render() {
        const { status = 'none' } = this.props;
        
        return (
            <div className="book-shelf-changer">
                <select value={status} onChange={this.onSelect}>
                    <option value="none" disabled>Move to...</option>
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