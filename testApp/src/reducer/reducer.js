import { combineReducers } from 'redux'

import strReducer from './strreducer'
import itemsReducer from './itemsreducer'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  str_list: strReducer
  ,item_list: itemsReducer,
})

export default rootReducer