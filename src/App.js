import React from 'react'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import BooksGrid from './BooksGrid'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }



  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <SearchBooksBar />
            <div className="search-books-results">
              <BooksGrid books={[]} />
            </div>
          </div>
        ) : (
          <div>
            <ListBooks />
            
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
            )}
          </div>
        )
  }
}

export default BooksApp
