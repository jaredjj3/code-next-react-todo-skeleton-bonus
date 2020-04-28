import React from "react";
import { render } from "react-dom";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { cloneDeep } from "lodash";

// TODO(#)s correspond to Code Next React Bootcamp's slides.

class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO(#3) Update the state such that reactDevName
    // points to a string of your name.
    this.state = {
      reactDevName: "Jared",
      todos: []
    };

    // In React class components, we bind each event handler to
    // the instance. That way, when the event handler is called,
    // the 'this' variable is pointing to this instance. If we
    // skipped this step, then the 'this' variable would be
    // undefined.
    this.onTodoInputEnter = this.onTodoInputEnter.bind(this);
    this.onTodoListItemToggle = this.onTodoListItemToggle.bind(this);
    this.onTodoListItemRemove = this.onTodoListItemRemove.bind(this);

    // React does not need to know about the next ID.
    // We leave it outside of the state so that React
    // does not try to re-render the component when it changes.
    this.nextId = 0;
  }

  onTodoInputEnter(todoInputValue) {
    // Deep copy the state.
    const nextState = cloneDeep(this.state);

    // TODO(#5) Create a todo object, which has 3 properties:
    // id (number), text (string), and isComplete (boolean).
    // hint: Use this.nextId and change it in some way.
    const todo = {
      id: this.nextId++,
      text: todoInputValue,
      isComplete: false
    };

    // TODO(#6) Add the todo to the nextState.todos array.
    nextState.todos.push(todo);

    // Set the next state.
    this.setState(nextState);
  }

  onTodoListItemToggle(id) {
    // TODO(#13) Deep copy the state.
    const nextState = cloneDeep(this.state);

    // TODO(#14) Find the todo that matches the id.
    // If there is no matched todo, do nothing.
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const todo = nextState.todos.find(todo => todo.id === id);
    if (!todo) {
      return;
    }

    // TODO(#15) Update the matched todo's isComplete property
    // to be the opposite of what it is currently set.
    todo.isComplete = !todo.isComplete;

    // TODO(#16) Set the next state.
    this.setState(nextState);
  }

  onTodoListItemRemove(id) {
    // TODO(#21) Deep copy the state.
    const nextState = cloneDeep(this.state);

    // TODO(#22) Use Array.prototype.filter to create a new
    // this.state.todos array that does *not* have a todo
    // that matches given id.
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    nextState.todos = nextState.todos.filter(todo => todo.id !== id);

    // TODO(#23) Set the next state.
    this.setState(nextState);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.reactDevName}'s Todos</h1>
        <TodoInput onEnter={this.onTodoInputEnter/* TODO(#7) Use this.onTodoInputEnter */} />

        <br />

        <TodoList
          todos={this.state.todos}
          onTodoListItemToggle={this.onTodoListItemToggle/* TODO(#17) Use this.onTodoListItemToggle */}
          onTodoListItemRemove={this.onTodoListItemRemove/* TODO(#24) Use the correct event handler. */}
        />

        <br />

        <pre className="alert alert-warning">
          this.state = {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
