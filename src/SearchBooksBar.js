import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class SearchBooksBar extends React.Component {
  static propTypes = {
    handleSearchResult: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.handleInput = this.handleInput.bind(this)
  }

// gets called on character input to search box
handleInput(event) {
  event.preventDefault()
  if (event.target.value !== '') {
      BooksAPI.search(event.target.value).then(books => {
        this.props.handleSearchResult(books)}
  )} else {
    this.props.handleSearchResult([])
  }
}

  render () {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input
            type="text"
            autoFocus="true"
            onChange={this.handleInput}
          placeholder="Search by title or author"/>

        </div>
      </div>
    )
  }
}

export default SearchBooksBar
