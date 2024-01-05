import React from "react";

import './AddForm.scss'

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
    }
  }

  changeLabel = (event) => {
    const newLabel = event.target.value;
    this.setState({
      label: newLabel,
    });
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.addListItem(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    return (
      <form className="add-form"
            onSubmit={this.submitForm}>
        <input className="add-form__label"
               type="text"
               placeholder="О чем вы думаете?"
               onChange={this.changeLabel}
               value={this.state.label}
        />
        <button className="add-form__submit"
                type="submit"
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default AddForm;