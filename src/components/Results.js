import React, { Component } from 'react'
import BookResult from './BookResult';

export class Results extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    
    // const booksDataKeys = Object.keys(this.props.booksData);
    console.log(this.props.booksData);
    // console.log(booksDataKeys);

    const resultsList = Object.keys(this.props.booksData).map(thisBook => {

      const book = this.props.booksData[thisBook];
      // ----------------------------------------
      const title = book.volumeInfo.title;
      const author = book.volumeInfo.authors;
      // const price = (book.saleInfo.listPrice.amount !== undefined ? USCurrencyFormat.format(book.saleInfo.listPrice.amount) : 'Not for sale')
      // const price = USCurrencyFormat.format(book.saleInfo.listPrice.amount);
      const saleInfo = book.saleInfo;
      const synopsis = book.volumeInfo.description;
      const image = book.volumeInfo.imageLinks.thumbnail;
      const playStoreLink =  book.volumeInfo.infoLink;
      const previewLink =  book.volumeInfo.previewLink;

      const info = {title, author, synopsis, saleInfo, image, playStoreLink, previewLink};

      return (
        <BookResult info={info} />
      )
    });
    
    
    return (
      <div>
        {resultsList}
      </div>
    )
  }
}

export default Results
