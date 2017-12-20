import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import './SearchBar.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      highlightedSuggestionIndex: null,
      valueBeforeUpDown: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateHighlightedSuggestion = this.updateHighlightedSuggestion.bind(
      this
    );
    this.handleSearch = this.handleSearch.bind(this);
    this.getSuggestionList = this.getSuggestionList.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearSuggestions = this.clearSuggestions.bind(this);
    this.highlightFirstSuggestion = this.highlightFirstSuggestion.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({ value: value, valueBeforeUpDown: value });

    if (value.length === 0) {
      this.clearSuggestions();
    }
  }

  handleSearch(e) {
    e.preventDefault();

    this.setState({ value: '' });
    this.props.handleSearch(this.state.value);

    this.clearSuggestions();
  }

  updateHighlightedSuggestion(direction) {
    if (this.state.highlightedSuggestionIndex === null) {
      this.highlightFirstSuggestion();
      return;
    }
    const suggestions = this.getSuggestionList();
    const len = suggestions.length;

    const nextIndex =
      (this.state.highlightedSuggestionIndex + direction + len) % len;
    const nextValue = suggestions[nextIndex];

    this.setState({ highlightedSuggestionIndex: nextIndex, value: nextValue });
  }

  highlightFirstSuggestion() {
    const suggestions = this.getSuggestionList();
    if (suggestions.length === 0) {
      return;
    }

    const firstValue = suggestions[0];
    this.setState({ value: firstValue, highlightedSuggestionIndex: 0 });
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case 40:
        // arrow down
        this.updateHighlightedSuggestion(1);
        break;
      case 38:
        // arrow up
        this.updateHighlightedSuggestion(-1);
        break;
      default:
    }
  }

  handleClick(queryStr) {
    this.setState({ value: queryStr }, () => {
      this.handleSearch();
    });
  }

  getSuggestionList() {
    const { suggestions } = this.props;

    const value = this.state.valueBeforeUpDown.trim().toUpperCase();
    if (!value) {
      return [];
    }

    return suggestions.filter(s => {
      s = s.toUpperCase();
      return s.startsWith(value);
    });
  }

  clearSuggestions() {
    this.setState({
      value: '',
      valueBeforeUpDown: '',
      highlightedSuggestionIndex: null
    });
  }

  render() {
    const { value, valueBeforeUpDown } = this.state;
    const suggestions = this.getSuggestionList(valueBeforeUpDown);

    return (
      <div className="search-bar">
        <form onSubmit={this.handleSearch}>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="City, Zip, Address, Key Words"
              value={value}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.clearSuggestions}
            />

            <InputGroup.Button>
              <Button bsStyle="warning" type="submit">
                Search
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </form>

        {suggestions.length > 0 ? (
          <div className="dropdown">
            {suggestions.map((option, index) => {
              const style =
                this.state.highlightedSuggestionIndex === index
                  ? { backgroundColor: '#f1f1f1' }
                  : null;

              return (
                <div
                  key={option}
                  onClick={e => this.handleClick(option)}
                  style={style}
                >
                  {option}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
