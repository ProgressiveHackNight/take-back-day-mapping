import React, { Component } from 'react';

// const SearchField = () => {
//   return <input type="text" />;
// };
class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <input type="text" value={this.state.value} onChange={this.handleChange} />;
  }
}

export default SearchField;
