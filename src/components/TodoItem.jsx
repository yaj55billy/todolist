
const TodoItem = (props) => {
  const { id, text, done, onToggleDone, onDeleteItem } = props;
  const atChange = () => {
    onToggleDone(id);
  }

  const atClick = () => {
    onDeleteItem(id);
  }

  return (
    <li className="todoitem">
      <div className="todoitem__content">
        <label className="todoitem__label" htmlFor={ id }>
          <input 
            className="mr-2"
            type="checkbox" 
            name="todoitem" 
            id={ id }
            checked={ done } 
            onChange={ atChange }/> 
            <h5 className={ done === true ? 'del mt-0' : 'mt-0' }>{ text }</h5>  
        </label>
        <button type="button" className="todoitem__close" onClick={ atClick }> X </button>
      </div>
    </li>  
  )
}

export default TodoItem;