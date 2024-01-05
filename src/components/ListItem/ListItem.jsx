import React from "react";

import './ListItem.scss'

class ListItem extends React.Component {
  render() {
    const {important, liked, label, toggleImportant, deleteItem, toggleLike} = this.props;

    let classNames = "list-item";

    classNames += important ? ' list-item_important' : '';
    classNames += liked ? ' list-item_liked' : '';

    return (
      <li className={classNames}>

        <span className="list-item__text">
          {label}
        </span>

        <div className="list-item__buttons">

          <button className="list-item__button star"
                  onClick={toggleImportant}>
            <i className="star_active fa-solid fa-star"/>
            <i className="star_inactive fa-regular fa-star"/>
          </button>

          <button className="list-item__button trash"
                  onClick={deleteItem}>
            <i className="fa-solid fa-trash"/>
          </button>

          <button className="list-item__button heart"
                  onClick={toggleLike}>
            <i className="heart_active fa-solid fa-heart"/>
            <i className="heart_inactive fa-regular fa-heart"/>
          </button>
        </div>
      </li>
    );
  }
}

ListItem.defaultProps = {
  important: false,
  liked: false,
  label: "Empty label",
}

export default ListItem;