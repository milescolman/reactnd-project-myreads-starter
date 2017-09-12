import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
          }

      this.getShelf = this.getShelf.bind(this)

      this.onShelfChange = this.onShelfChange.bind(this)
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      {
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

  getShelf = (inputBook) => {
    //return shelf of book
    if (this.state.read.filter((book) => {
      return (book.id === inputBook.id)
    }).length > 0) {
      return 'read'
    } else if (this.state.currentlyReading.filter(book => {
      return (book.id === inputBook.id)
    }).length > 0) {
      return 'currentlyReading'
    } else if (this.state.wantToRead.filter(book => {
      return (book.id === inputBook.id)
    }).length > 0) {
      return 'wantToRead'
    } else {
      return 'none'
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({history}) => (
          <SearchBooks getShelf={this.getShelf}/>
        )}
        />
        <Route exact path="/" render={() => (
          <div>
            <ListBooks
              currentlyReading={this.state.currentlyReading}
              wantToRead={this.state.wantToRead}
              read={this.state.read}
              onShelfChange={this.onShelfChange}
            />

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
