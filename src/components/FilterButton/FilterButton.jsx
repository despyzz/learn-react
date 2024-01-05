import React from "react";

import './FilterButton.scss';

class FilterButton extends React.Component {

  render() {
    const {
      label,
      value,
      updateFilter,
      active
    } = this.props;

    let classes = "filter-button";
    if (active) classes += " filter-button_active";

    return (
      <button value={value}
              className={classes}
              type="button"
              onClick={(event) => updateFilter(value, event)}>
        {label}
      </button>
    );
  }
}

export default FilterButton