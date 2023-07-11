import RenderTip from "./RenderTip";

const TodoFilter = (props) => {
  const { filterType, onFilterChange } = props;

  return (
    <div className="todofilter">
      <RenderTip />
      <button 
        className={
          `todofilter__item 
          ${filterType === 'all' ? 'active' : ''} 
        `} 
        onClick={ () => onFilterChange('all') }>
        所有任務
      </button>
      <button
        className={
          `todofilter__item 
          ${filterType === 'active' ? 'active' : ''} 
        `} 
        onClick={ () => onFilterChange('active') }>
        進行中任務
      </button>
      <button
        className={
          `todofilter__item 
          ${filterType === 'completed' ? 'active' : ''} 
        `} 
        onClick={ () => onFilterChange('completed') }>
        完成任務
      </button>
    </div>
  )
}

export default TodoFilter;