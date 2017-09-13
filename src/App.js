import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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
      this.finishShelfChange = this.finishShelfChange.bind(this)
  }


  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      {
        // set up the 3 shelves based on API getAll() result
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

  // move a book to destination shelf and update state
  finishShelfChange(bookToMove, destShelf){
    //skip none as destination shelf
    if (destShelf !== "none") {
      let newState = {}
      bookToMove.shelf = destShelf
      //save target shelf in newState
      newState[destShelf] = this.state[destShelf]
      //save book to move in newState
      newState[destShelf].push(bookToMove)
      //update the state
      this.setState(newState)
    }
  }

  //function that gets called when a book has its shelf changed
  onShelfChange (book, shelf, oldShelf) {
    //
    BooksAPI.update(book, shelf).then(() =>
      {
        //dynamically assigned shelf filter thing here
        let newState = {}, tmpShelf = [], tmpBook = null
        //filter out book to move and save its contents
        //tmpShelf will replace the old shelf
        if (oldShelf !== 'none') {
          this.state[oldShelf].forEach(curBook => {
            if (curBook.id === book.id)
              tmpBook = curBook
            else tmpShelf.push(curBook)
          })
          newState[oldShelf] = tmpShelf
          this.setState(newState)
          this.finishShelfChange(tmpBook, shelf)

        } else {
          //look up book via API for books with no shelf
          BooksAPI.get(book.id).then(book =>
            {
              this.finishShelfChange(book, shelf)
            })
        }
      }
    )
  }

  //return shelf of book based on book id and shelf arrays
  getShelf = (inputBook) => {
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
        <Switch>
          <Route path="/search" render={({history}) => (
            <SearchBooks
              getShelf={this.getShelf}
              onShelfChange={this.onShelfChange}
            />
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
          <Route render={() => (
            <div>
              <h1>Error 404</h1>
              <h2>The requested resource could not be found.</h2>
            </div>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
