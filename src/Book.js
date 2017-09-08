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
          {/* old style { width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' } */}
          <div className="book-cover" style={this.props.style}></div>
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
        {/* To Kill a Mockingbird */}
        <div className="book-title">{this.props.title}</div>
        {/* Harper Lee */}
        <div className="book-authors">{this.props.author}</div>
      </div>
    )

    return book
  }
}
export default Book
