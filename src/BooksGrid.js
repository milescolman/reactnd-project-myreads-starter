import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import no_cover_img from './no_cover.jpg'

function BooksGrid (props) {

  return (
    <ol className='books-grid'>
      {props.books.map((book) =>
        <li key={book.id} >
          <Book
            img={book.imageLinks ? book.imageLinks.smallThumbnail : no_cover_img}
            title={book.title}
            //suppress propType error on authors.join
            authors={book.authors || []}
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
