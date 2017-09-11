import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

function BooksGrid (props) {
  return (
    <ol className='books-grid'>
      {props.books.map((book) =>
        <li key={book.id} >
          <Book
            img={book.imageLinks.smallThumbnail}
            title={book.title}
            authors={book.authors}
            shelf={book.shelf}
            onShelfChange={props.onShelfChange}
            book={{id: book.id}}
          />
        </li>
      )}
    </ol>
  )
}
BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksGrid
