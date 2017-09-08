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
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              let currentBooks
              currentBooks = this.state.books
            }
            {//    currentBooks = currentBooks.filter(book => return book.shelf === "currentlyReading")
            }
            <Bookshelf bookshelfTitle="Currently Reading" books={currentBooks} />
              </div>
        </div>
      </div>
    )
  }
}
export default ListBooks
