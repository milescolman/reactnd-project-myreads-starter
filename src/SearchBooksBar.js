import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooksBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''} //not needed

    this.handleInput = this.handleInput.bind(this)
  }

handleInput(event) {
  event.preventDefault()
//  this.setState({value: event.target.value})
  console.log(event.target.value)
  BooksAPI.search(event.target.value, '20').then(books => console.log(books))
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
            //            value={this.state.value}
            onChange={this.handleInput}
          placeholder="Search by title or author"/>

        </div>
      </div>
    )
  }
}

export default SearchBooksBar
