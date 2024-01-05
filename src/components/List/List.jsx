import React from "react";

import './List.scss';

import ListItem from "../ListItem";

class List extends React.Component {
  getItem = ({key, ...itemProps}) => {
    return <ListItem {...itemProps}
                     key={key}
                     deleteItem={() => this.props.deleteItem(key)}
                     toggleLike={() => this.props.toggleLike(key)}
                     toggleImportant={() => this.props.toggleImportant(key)}
    />;
  }

  getAllItems = () => {
    return this.props.items.map(this.getItem);
  }

  render() {
    return (
      <ul className="list">
        {this.getAllItems()}
      </ul>
    );
  }
}

List.defaultProps = {
  items: []
}

export default List;