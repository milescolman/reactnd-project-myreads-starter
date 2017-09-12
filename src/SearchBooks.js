import React from 'react'
import SearchBooksBar from './SearchBooksBar'
import BooksGrid from './BooksGrid'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  constructor (props) {
    super(props)
    this.state = {books: []}

    this.handleSearchResult = this.handleSearchResult.bind(this)
  }

  handleSearchResult (books) {
    //loop over books and set shelf according to its current value
    books.forEach(book => {
      book.shelf = this.props.getShelf(book)
    })
    this.setState({books: books})
  }

  handleShelfChange (book, shelf) {
    BooksAPI.update(book, shelf)
  }

  render () {
    return (
      <div className="search-books">
        <SearchBooksBar handleSearchResult={this.handleSearchResult} />
        <div className="search-books-results">
          <BooksGrid books={this.state.books}
            onShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    )
  }
}
export default SearchBooks
