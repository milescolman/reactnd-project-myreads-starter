import React from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

//convert to function
function ListBooks (props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            bookshelfTitle="Currently Reading"
            books={props.currentlyReading}
            onShelfChange={props.onShelfChange}
          />
        </div>
        <div>
          <Bookshelf
            bookshelfTitle="Want to Read"
            books={props.wantToRead}
            onShelfChange={props.onShelfChange}
          />
        </div>
        <div>
          <Bookshelf
            bookshelfTitle="Read Books"
            books={props.read}
            onShelfChange={props.onShelfChange}
          />
        </div>
      </div>
    </div>
  )
}
ListBooks.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}
export default ListBooks
