import React from "react";
import { cloneDeep } from "lodash";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onKeyPress = this.onKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    // Deep copy the state.
    const nextState = cloneDeep(this.state);

    // TODO(#8) Set the nextState.value to be
    // the event.target.value.
    nextState.value = event.target.value;

    // Set the next state.
    this.setState(nextState);
  }

  /**
   * Determines if a user pressed enter and validates
   * the input before calling the onEnter prop.
   */
  onKeyPress(event) {
    // Do nothing if the enter key was not pressed.
    if (event.key !== "Enter" || event.which !== 13) {
      return;
    }

    // TODO(#9) Call this.props.onEnter with this.state.value.
    this.props.onEnter(this.state.value);
    
    // TODO(#10) Deep copy the state.
    const nextState = cloneDeep(this.state);

    // TODO(#11) Update the state such that the user
    // does not have to manually backspace.
    nextState.value = '';

    // TODO(#12) Set the next state.
    this.setState(nextState);
  }

  componentDidMount() {
    if (this.props.initialValue) {
      const nextState = cloneDeep(this.state);
      nextState.value = this.props.initialValue;
      this.setState(nextState);
    }
  }

  render() {
    return (
      <input
        className="form-control"
        type="text"
        placeholder="What do you need to do?"
        value={this.state.value}
        onChange={this.onChange}
        onKeyPress={this.onKeyPress}
      />
    );
  }
}
