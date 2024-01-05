import React from "react";

import './TopPanel.scss';

class TopPanel extends React.Component {

  render() {
    const {
      username,
      totalNotes,
      likedNotes
    } = this.props;

    return (
      <div className="top-panel">
        <h1 className="top-panel__user-name">
          {username}
        </h1>

        <h2 className="top-panel__notes-status">
          {totalNotes} записи, из них {likedNotes} понравилось
        </h2>
      </div>
    );
  }
}

export default TopPanel;