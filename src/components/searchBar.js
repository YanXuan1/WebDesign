import React from "react";
import './searchBar.scss';
class SearchBar extends React.Component {

  onInputChange(e) {
    this.props.inputChange(e);
  }
  onFormSubmit(e) {
    e.preventDefault();
    this.props.formSubmitted();

  }
  // render function is triggerd whenver update
  render() {
    const location = this.props.location ;
    
    return (
      <div className="search-bar">
        <form className = "search-bar-form"onSubmit={(e) => this.onFormSubmit(e)}>
          <button className = "search-bar-btn" type="submit">Search</button>
          <input className="search-bar-input"
            id="search"
            name="search"
            value={location}
            onChange={(e) => this.onInputChange(e)}
          ></input>
        </form>
        
      </div>
    );
  }
}

export default SearchBar;
