import React, { Component } from 'react';
import { observer} from 'mobx-react/custom';


export  const TodoListView = observer(
    class TodoList extends Component {
    createNew(e){
        if(e.which === 13){
            this.props.store.createTodo(e.target.value);
            e.target.value = '';
        }
    }
    filter(e){
        this.props.store.filter = e.target.value;
    }
    render() {
        const { filteredTodos } = this.props.store;
        const todoList = filteredTodos.map(todo =>(
            <li key={todo.id}>
              <span>{todo.value}</span>
            </li>
        ))
        return (
            <div>
              
                <h1>TODO LIST</h1>
                <input  onKeyPress={this.createNew.bind(this)} />

                <input onKeyPress={this.createNew.bind(this)}  />
                <ul>{todoList}</ul>
            </div>
        );
    }
});