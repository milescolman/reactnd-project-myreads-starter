import React from 'react'
import PropTypes from 'prop-types'


class Book extends React.Component {
  static propTypes = {
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      shelf: PropTypes.string.isRequired,
      onShelfChange: PropTypes.func.isRequired,
      book: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {shelf: this.props.shelf}

  }

  //handleChange gets called when a book shelf is changed
  handleChange (event) {
    event.preventDefault()
    // set new shelf for book
    this.setState({shelf: event.target.value})
    this.props.onShelfChange(
      this.props.book,
      event.target.value,
      this.state.shelf
    )
  }

  render () {

    const book = (
      <div className="book">
        <div className="book-top">
          {/* Would like to know the right way to dynamically get image sizes for this div: */}
          <div className="book-cover" style={
            {width: "100%", height: "0", paddingTop: "130%",
            backgroundImage: "url(" + this.props.img + ")"}}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{
          this.props.authors.join(', ')
        }</div>
      </div>
    )

    return book
  }
}
export default Book
