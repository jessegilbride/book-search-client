import React, { Component } from 'react'

export class Search extends Component {

  constructor() {
    super();
    this.state = {
      searchTerm: '',
      printType: '',
      bookType: ''
    }
  }

  handleInput(searchTerm) {
    this.setState({searchTerm})
  }

  handlePrintSelect(printType) {
    this.setState({printType})
  }

  handleBookSelect(bookType) {
    this.setState({bookType})
  }
  
  handleSearch(event) {
    event.preventDefault();

    const {searchTerm, printType, bookType} = this.state;
    const apiKey = 'AIzaSyBFTkpGfa9kxkVQUSXsDO9-l1m-yxdC-Eo';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&${printType}&${bookType}&key=${apiKey}`;

    // console.log(url);

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return response.json();
    })
    .then(jsonData => {
      this.props.searchResults(jsonData);
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
  }
  
  render() {
    return (
      <div className='search-container'>
        <form onSubmit={event => this.handleSearch(event)}>
          <div className='search-input'>
            {/* <label>Search: </label> */}
            <input className='searchInput' onChange={event => this.handleInput(event.target.value)} required />
            <button type='submit'>Search</button>
          </div>
          <div className='search-filter-container'>
            
            <div className='search-filter'>
              <label>Print Type</label>
              <select className='search-select' onChange={event => this.handlePrintSelect(event.target.value)} required>
                <option value='' defaultValue disabled>select a print type...</option>
                <option value='all'>all</option>
                <option value='books'>books</option>
                <option value='magazines'>magazines</option>
              </select>
            </div>
            
            <div className='search-filter'>
              <label>Book Type</label>
              <select className='search-select' onChange={event => this.handleBookSelect(event.target.value)} required>
                <option value='' defaultValue disabled>select a book type...</option>
                <option value='ebooks'>both paid and free eBooks</option>
                <option value='free-ebooks'>free Google eBooks</option>
                <option value='paid-ebooks'>eBooks with a price for purchase</option>
                <option value='partial'>at least part of the texts are previewable</option>
                <option value='full'>all of the text is viewable</option>
              </select>
            </div>

          </div>
        </form>
      </div>
    )
  }
}

export default Search
