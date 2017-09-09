import React from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {books: []}
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      {
        console.log(books)
        this.setState({books: books})
      }
    )
  }

  render () {
    const currentBooks = this.state.books.filter(book =>
      book.shelf === "currentlyReading")
    const wantToReadBooks = this.state.books.filter(book =>
      book.shelf === "wantToRead")
    const readBooks = this.state.books.filter(book => book.shelf === "read")

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf bookshelfTitle="Currently Reading" books={currentBooks} />
          </div>
          <div>
            <Bookshelf bookshelfTitle="Want to Read" books={wantToReadBooks} />
          </div>
          <div>
            <Bookshelf bookshelfTitle="Read Books" books={readBooks} />
          </div>
        </div>
      </div>
    )
  }
}
export default ListBooks
