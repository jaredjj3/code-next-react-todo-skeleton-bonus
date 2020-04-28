import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.props.todos.map(todo => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={this.props.onTodoListItemToggle}
            onRemove={this.props.onTodoListItemRemove}
          />
        ))}
      </ul>
    );
  }
}
