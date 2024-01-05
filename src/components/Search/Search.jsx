import React from "react";

import './Search.scss';

import FilterButton from "../FilterButton";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.defaultFilter,
    }
  }

  updateTerm = (event) => {
    const newTerm = event.target.value;
    this.props.updateTerm(newTerm);
  }

  updateFilter = (newFilter) => {
    this.setState({
      filter: newFilter,
    });
    this.props.updateFilter(newFilter);
  }

  render() {

    const buttons = this.props.filterButtons.map((item) => {
      const {value, label, key} = item;
      return (
        <FilterButton value={value}
                      label={label}
                      key={key}
                      active={value === this.state.filter}
                      updateFilter={this.updateFilter}
        />
      );
    });

    return (
      <search className="search">
        <input className="search__label"
               type="text"
               placeholder="Поиск по записям"
               onChange={this.updateTerm}
        />
        <div className="search__filter">
          {buttons}
        </div>
      </search>
    );
  }
}

export default Search;