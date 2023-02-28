import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import StringListItem from './stringlistitem'

const listItemsIdxs = (state) => state.myReducer.str_list.map(str,index);
console.log

const TodoList = () => {

  const todoIds = useSelector(listItemsIdxs, shallowEqual);

  const renderedListItems = todoIds.map((index) => {
    return <StringListItem key={index} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList