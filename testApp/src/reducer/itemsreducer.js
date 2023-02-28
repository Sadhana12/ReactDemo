
const initialState = [];

export default function itemsReducer(state = initialState, action) {
    switch (action.type) {
      case 'GET_ITEM_LIST_SUCCESS': {
        return {
          // Again, one less level of nesting to copy
          ...state,
            item_list: action.item_list,
        }
      }

      default:
        return state
    }
  }