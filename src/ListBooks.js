import React from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class ListBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
    this.onShelfChange = this.onShelfChange.bind(this)
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      {
        console.log(books)
        this.setState({
          currentlyReading: books.filter(book =>
            book.shelf === "currentlyReading"),
          wantToRead: books.filter(book =>
            book.shelf === "wantToRead"),
          read: books.filter(book =>
          book.shelf === "read")
        }
      )
    }
  )}

  onShelfChange (book, shelf, oldShelf) {
    BooksAPI.update(book, shelf).then(() =>
      {
        console.log(shelf)
        //dynamically assigned shelf filter thing here
        let newState = {}, tmpShelf = [], tmpBook = null
        //filter out book to move and save its contents
        //tmpShelf will replace the old shelf
        this.state[oldShelf].forEach(curBook => {
          if (curBook.id === book.id)
            tmpBook = curBook
          else tmpShelf.push(curBook)
        })
        //set shelf for book to move
        tmpBook.shelf = shelf
        //save updated oldShelf in newState
        newState[oldShelf] = tmpShelf
        //skip empty shelves
        if (shelf !== "none") {
          //save target shelf in newState
          newState[shelf] = this.state[shelf]
          //save book to move in newState
          newState[shelf].push(tmpBook)
          //update the state
        }
        this.setState(newState)
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
            <Bookshelf
              bookshelfTitle="Currently Reading"
              books={this.state.currentlyReading}
              onShelfChange={this.onShelfChange}
            />
          </div>
          <div>
            <Bookshelf
              bookshelfTitle="Want to Read"
              books={this.state.wantToRead}
              onShelfChange={this.onShelfChange}
            />
          </div>
          <div>
            <Bookshelf
              bookshelfTitle="Read Books"
              books={this.state.read}
              onShelfChange={this.onShelfChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default ListBooks
