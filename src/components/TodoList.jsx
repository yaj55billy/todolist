import { useState, useCallback } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import RenderTip from "./RenderTip";

const initialList = [
  { id: 'id1', text: '我是任務一', done: true },
  { id: 'id2', text: '例行公事二', done: false },
  { id: 'id3', text: '要做的事情三', done: false },
];

const TodoList = () => {

  const [list, setList] = useState(initialList);
  const [filterType, setFilterType] = useState('all');
  
  // 切換是否完成的狀態
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

  // 新增項目
  const atAddItem = useCallback((input) => {
    const newItem = {
      id: new Date().getTime().toString(),
      text: input,
      done: false
    }

    // const newList = [...list, newItem];
    setList((prevList) => {
      return [...prevList, newItem];
    });
  }, []);

  
  // 刪除項目
  const atDeleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  // 切換 Filter 的狀態
  const atFilterChange = (status) => {
    setFilterType(status);
  }

  // 根據 FilterType ，決定顯示要什麼資料
  const atFilterList = list.filter((item) => {
    if(filterType === 'completed') { return item.done }
    if(filterType === 'active') { return !item.done }
    return true;
  });

  return (
    <div className="container">
      <RenderTip />
      <h1 className="text-center">TodoList</h1>
      
      <TodoForm onAddItem={ atAddItem }/>

      <ol className="pl-0">
        { 
          atFilterList.map((item) => {
            return (
              <TodoItem key={ item.id } id={ item.id } text={ item.text } done={ item.done } onToggleDone={ atToggleDone } onDeleteItem={ atDeleteItem }/>
            ) 
          })
        }
      </ol>

      <TodoFilter filterType={ filterType } onFilterChange={ atFilterChange }/>
    </div>
  )
}

export default TodoList;