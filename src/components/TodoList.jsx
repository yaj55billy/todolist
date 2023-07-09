import { useState } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const initialList = [
  { id: 'id1', text: '我是任務一', done: true },
  { id: 'id2', text: '例行公事二', done: false },
  { id: 'id3', text: '要做的事情三', done: false },
];

const TodoList = () => {

  const [list, setList] = useState(initialList);
  
  const atToggleDone = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        // 點到這筆，就修改這筆的 item.done
        item.done = !item.done;
      }
      return item;
    });
    setList(newList);
  }

  const atDeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <div className="container">
      <h1 className="text-center">TodoList</h1>
      <TodoForm />
      <ol className="pl-0">
        { 
          list.map((item) => {
            return (
              <TodoItem key={ item.id } id={ item.id } text={ item.text } done={ item.done } onToggleDone={ atToggleDone } onDeleteItem={ atDeleteItem }/>
            ) 
          })
        }
      </ol>
    </div>
  )
}

export default TodoList;