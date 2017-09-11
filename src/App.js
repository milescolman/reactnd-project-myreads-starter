import React from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/search" render={({history}) => (
          <SearchBooks />
        )}
        />
        <Route exact path="/" render={() => (
          <div>
            <ListBooks />

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
