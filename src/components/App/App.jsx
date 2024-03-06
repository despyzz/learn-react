import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import "./App.scss";

import TopPanel from '../TopPanel/'
import Search from '../Search/'
import List from "../List/";
import AddForm from "../AddForm/";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {important: false, label: "Первый", liked: true, key: 1},
        {label: "Второй", important: true, liked: true, key: 2},
        {label: "Третий", key: 3},
        {label: "Четвертый", liked: true, key: 4},
        {label: "Пятый", key: 5},
      ],
      term: '',
      filter: 'all',
    };
    this.listItemKey = this.state.items.length + 1;
    this.filterButtons = [
      {label: 'Все', value: 'all', key: 1},
      {label: 'Понравились', value: 'liked', key: 2},
    ];
    this.defaultFilter = 'all';

  }

  deleteListItem = (key) => {
    this.setState(({items}) => {
      const index = items.findIndex(item => item.key === key);
      const newItems = [
        ...items.slice(0, index),
        ...items.slice(index + 1)
      ];
      return {
        items: newItems
      };
    });
  }

  addListItem = (label) => {
    this.setState(({items}) => {
      const newItem = {
        label: label === '' ? 'Empty label' : label,
        key: this.listItemKey++,
      }

      const newItems = [...items, newItem];

      return {
        items: newItems,
      };
    });
  }

  toggleLikeListItem = (key) => {
    this.setState(({items}) => {
      const index = items.findIndex(item => item.key === key),
            curItem = items[index];

      const newItem = {
        ...curItem,
        liked: !curItem.liked,
      };
      const newItems = [
          ...items.slice(0, index),
          newItem,
          ...items.slice(index + 1),
      ]
      return {
        items: newItems,
      }
    })
  }

  toggleImportantListItem = (key) => {
    this.setState(({items}) => {
      const index = items.findIndex(item => item.key === key),
        curItem = items[index];

      const newItem = {
        ...curItem,
        important: !curItem.important,
      };
      const newItems = [
        ...items.slice(0, index),
        newItem,
        ...items.slice(index + 1),
      ]
      return {
        items: newItems,
      }
    })
  }

  searchListItems = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  }

  filterListItems = (items, filter) => {
    if (filter === 'liked') {
      return items.filter(item => item.liked);
    }
    return items;
  }

  updateTerm = (term) => {
    this.setState({term});
  }

  updateFilter = (filter) => {
    this.setState({filter});
  }

  render() {
    const {items, term, filter} = this.state;

    // Top panel data
    const totalItems = items.length,
          likedItems = items.filter(item => item.liked).length;

    // Visible items
    const searchedItems = this.searchListItems(items, term),
          filteredItems = this.filterListItems(searchedItems, filter);

    return (
      <>
        <header>
          <div className="container">
            <TopPanel username="despyzz"
                      totalNotes={totalItems}
                      likedNotes={likedItems}
            />
          </div>
        </header>
        <main>
          <div className="container">
            <Search updateTerm={this.updateTerm}
                    updateFilter={this.updateFilter}
                    filterButtons={this.filterButtons}
                    defaultFilter={this.defaultFilter}
            />
            <List items={filteredItems}
                  deleteItem={this.deleteListItem}
                  toggleLike={this.toggleLikeListItem}
                  toggleImportant={this.toggleImportantListItem}
            />
            <AddForm addListItem={this.addListItem}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
library.add(fab, fas, far);
