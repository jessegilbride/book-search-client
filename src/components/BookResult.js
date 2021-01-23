import React, { Component } from 'react'
/* "info" prop contain: 
title, author, synopsis, image, playStoreLink, previewLink
*/

export class BookResult extends Component {

  /* let priceMessage: ''; */

  render() {
    /* const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }); */
    // USCurrencyFormat.format();

    /* const saleInfo = this.props.info.saleInfo;

    if (saleInfo === 'FOR_SALE' || saleInfo === 'FOR_SALE_AND_RENTAL' ) {
      this.setState({
        priceMessage: `Buy for ${USCurrencyFormat.format(saleInfo.retailPrice)}`
      })
    } else if (saleInfo === 'NOT_FOR_SALE' ) {
      this.setState({
        priceMessage: 'This item is not for sale.'
      })
    } */
  
  /* switch (saleInfo.saleability) {
    case 'FOR_SALE':
      priceMessage = `Buy for ${USCurrencyFormat.format(saleInfo.retailPrice)}`;
      break;

    case 'FOR_RENTAL':
      priceMessage = '(See Play Store link for rental pricing.)';
      break;

    case 'FOR_SALE_AND_RENTAL':
      priceMessage = `
      Buy for ${USCurrencyFormat.format(saleInfo.retailPrice)}
      (See Play Store link for rental pricing.)
      `;
      break;

    case 'FOR_PREORDER':
      priceMessage = '(See Play Store link for preorder info/pricing.)';
      break;

    case 'FREE':
      priceMessage = `<em>FREE</em>`
      break;

    case 'NOT_FOR_SALE':
      priceMessage = 'This book is not for sale.'
      break;
  
    default:
      priceMessage = saleInfo.saleability;
      break;
  } */

    return (
      <div className='book-tile'>
        <div className='book-info'>
          <h2>{this.props.info.title}</h2>
          <p>Author(s): {this.props.info.author}</p>
          <p>{this.props.info.synopsis}</p>
          <div className='book-links-container'>
            <a href={this.props.info.previewLink} className='book-link' target='_blank'>See peview</a>
            <a href={this.props.info.playStoreLink} className='book-link' target='_blank'>See on Play Store</a>
          </div>
        </div>
        <img src={this.props.info.image} alt='cover for this book' />
      </div>
    )
  }
}

export default BookResult
