import React from "react";
import { cloneDeep } from "lodash";
import TodoInput from "./TodoInput";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTodoInputVisible: false,
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onTodoInputEnter = this.onTodoInputEnter.bind(this);
  }

  onCheckboxChange(event) {
    // TODO(#18) Call this.props.onToggle with the todo ID.
    // hint: How can you access the todo ID?
    this.props.onToggle(this.props.todo.id);
  }

  onRemoveClick(event) {
    // TODO(#25) Call this.props.onRemove with the todo ID.
    this.props.onRemove(this.props.todo.id);
  }

  onEditClick(event) {
    const nextState = cloneDeep(this.state);
    nextState.isTodoInputVisible = true;
    this.setState(nextState);
  }

  onTodoInputEnter(todoInputValue) {
    this.props.onTextUpdate(this.props.todo.id, todoInputValue);
    const nextState = cloneDeep(this.state);
    nextState.isTodoInputVisible = false;
    this.setState(nextState);
  }

  render() {
    const id = `todo-id-${this.props.todo.id}`;

    let className = "list-group-item d-flex justify-content-between align-items-center";
    if (this.props.todo.isComplete) {
      className += " list-group-item-success";
    }

    return (
      <li className={className}>
        <div className="form-check form-check-inline">
          <input
            id={id}
            className="form-check-input"
            type="checkbox"
            checked={this.props.todo.isComplete/* TODO(#19) Use the correct todo property. */}
            onChange={this.onCheckboxChange/* TODO(#20) Use the correct event handler. */}
          />
          {this.state.isTodoInputVisible
            ? 
              (<TodoInput
                initialValue={this.props.todo.text}
                onEnter={this.onTodoInputEnter}
              />)
            :
              (<label htmlFor={id} className="form-check-label">
                {this.props.todo.text}
              </label>)}
        </div>
        <div className="btn-group" role="group">
          <button
            className="btn btn-secondary btn-sm"
            onClick={this.onEditClick}
          >
            edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={this.onRemoveClick/* TODO(#26) Use the correct event handler */}
          >
            remove
          </button>
        </div>
      </li>
    );
  }
}
