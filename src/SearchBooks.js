import React from 'react'
import PropTypes from 'prop-types'
import SearchBooksBar from './SearchBooksBar'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {
  static propTypes = {
      getShelf: PropTypes.func.isRequired,
      onShelfChange: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {books: [],
                  booksMatchQuery: true}
    this.handleSearchResult = this.handleSearchResult.bind(this)
  }

  handleSearchResult (books) {
    if (books.hasOwnProperty('error')) {
      this.setState({books: [], booksMatchQuery: false})
    } else {
      //loop over books and set shelf according to its current value
      books.forEach(book => {
        book.shelf = this.props.getShelf(book)
      })
      this.setState({books: books, booksMatchQuery: true})
    }
  }

  render () {
    return (
      <div className="search-books">
        <SearchBooksBar
          handleSearchResult={this.handleSearchResult}
        />
        <div className="search-books-results">
          <BooksGrid
            books={this.state.books}
            onShelfChange={this.props.onShelfChange}
          />

          <div className="no-books-found"
            style={{display: !this.state.booksMatchQuery? 'block' : 'none'}}>
            <em>No books match query.</em>
            <p>Try a subject like 'artificial intelligence'</p>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchBooks
