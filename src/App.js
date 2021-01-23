import React, { Component } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import './App.css';

class App extends Component {

  constructor() {
    super();
    /* this.state = {
      booksFound: {}
    } */
    this.handleUpdateBooksFound = this.handleUpdateBooksFound.bind(this); // bind method to the class
  }

  state = {
    booksData: {}
  }

  handleUpdateBooksFound(jsonData) {
    // console.log(jsonData)
    this.setState({
      booksData: jsonData.items
    });
  }
  
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="app-name">Google Book Search</div>
        </header>
        <main>
          <Search searchResults={jsonData => this.handleUpdateBooksFound(jsonData)} />
          <Results booksData={this.state.booksData} />
        </main>
      </div>
    );
  }
  
}

export default App;
