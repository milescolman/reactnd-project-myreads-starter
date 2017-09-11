import React from 'react'
import BooksGrid from './BooksGrid'
import PropTypes from 'prop-types'

function Bookshelf (props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={props.books} onShelfChange={props.onShelfChange}/>
      </div>
    </div>
  )
}
Bookshelf.propTypes = {
    bookshelfTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
}

export default Bookshelf
