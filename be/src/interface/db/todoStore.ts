import {Todo} from '../graphql/generated/graphql';

let id = 0;
const todoList: Todo[] = [];

function getAllTodo() {
  return todoList;
}

function addTodo(content: string) {
  todoList.push({
    id: String(id++),
    content: content,
    completed: false,
  });
  return todoList[todoList.length - 1];
}

function deleteTodo(id: string) {
  return todoList.splice(
    todoList.findIndex(todo => todo.id === id),
    1
  )[0];
}

export default {
  getAllTodo,
  addTodo,
  deleteTodo,
};
