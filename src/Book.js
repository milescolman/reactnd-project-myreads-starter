import React from 'react'



class Book extends React.Component {

  constructor (props) {
    super(props)
    this.state = {shelf: this.props.shelf}
  }

  render () {

    const book = (
      <div className="book">
        <div className="book-top">
          {/* Would like to know th teribght way to dynamically get image sizes for this div: */}
          <div className="book-cover" style={{width: '100%', height: '0', paddingTop: '130%', backgroundImage: 'url('+this.props.img + ')'}}></div>
          <div className="book-shelf-changer">
            <select>
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
