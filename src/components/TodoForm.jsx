import { useState } from "react";
import RenderTip from "./RenderTip";

const TodoForm = (props) => {
  const { onAddItem } = props;
  const [input, setInput] = useState('');

  const atChange = (e) => {
    setInput(e.target.value);
  }

  const atClick = () => {
    if(input === '') {
      console.log('空值不往下執行');
      return;
    }  
    setInput('');
    onAddItem(input);
  }

  return (
    <section className="todoform">
      <RenderTip />
      <input className="todoform__input" type="text" value={ input } onChange={ atChange }/>
      <button className="todoform__newbtn" type="button" onClick={ atClick }>新增</button>
    </section>
  )
}

export default TodoForm;