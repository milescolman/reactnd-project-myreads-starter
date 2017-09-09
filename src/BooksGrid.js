import React from 'react'
import Book from './Book'

function BooksGrid (props) {
  return (
    <ol className='books-grid'>
      {props.books.map((book, index) =>
        <li key={index} >
          <Book img={book.imageLinks.smallThumbnail} title={book.title} authors={book.authors} />
        </li>
      )}
    </ol>
  )
}
export default BooksGrid
