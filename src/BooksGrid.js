import React from 'react'
import Book from './Book'

function BooksGrid (props) {
  return (
    <ol className='books-grid'>
      {props.books.map((book, index) =>
        <li key={index} >
          <Book style={book.style} title={book.title} author={book.author} />
        </li>
      )}
    </ol>
  )
}
export default BooksGrid
