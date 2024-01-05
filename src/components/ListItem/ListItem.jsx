import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
            <FontAwesomeIcon className="star_active" icon="fa-solid fa-star"/>
            <FontAwesomeIcon className="star_inactive" icon="fa-regular fa-star"/>
          </button>

          <button className="list-item__button trash"
                  onClick={deleteItem}>
            <FontAwesomeIcon icon="fa-solid fa-trash" />
          </button>

          <button className="list-item__button heart"
                  onClick={toggleLike}>
            <FontAwesomeIcon className="heart_active" icon="fa-solid fa-heart"/>
            <FontAwesomeIcon className="heart_inactive" icon="fa-regular fa-heart"/>
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