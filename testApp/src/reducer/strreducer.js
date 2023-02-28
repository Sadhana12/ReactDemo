import { LOAD_STRS, LOAD_STRS_SUCCESS, LOAD_STRS_ERROR } from '../containers/constants'
import { ADD_STR, ADD_STR_SUCCESS, ADD_STR_ERROR } from '../containers/constants'
import { LOAD_ITEMS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR } from '../containers/constants'

//const initialState = [];
export const initialState = {
  loading: false,
  error: false,
  newStr: false,
  strData: [],
  itemData: [],
};

const strReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_STRS:
      //console.log("LOAD_STRS");
      return { loading: true, error: false, strData: [] };

    case LOAD_STRS_SUCCESS:
      //console.log(LOAD_STRS_SUCCESS);
      return { loading: false, error: false, strData: action.strlist };


    case LOAD_STRS_ERROR:
      return { loading: false, error: action.error, strData: [] };

    case ADD_STR:
      console.log('ADD_STR');
      return { loading: true, error: false, newstr: action.newStr, strData: [] };

    case ADD_STR_SUCCESS:
      console.log('ADD_STR_SUCCESS');
      return { loading: false, error: false, newStr: action.newStr, strData: [] };

    case ADD_STR_ERROR:
      console.log('ADD_STR_ERROR');
      return { loading: false, error: action.error, newStr: '', srtData: [] };

    case LOAD_ITEMS:
      console.log("LOAD_ITEMS");
      return { loading: true, error: false, itemData: [] };

    case LOAD_ITEMS_SUCCESS:
      console.log("LOAD_STRS_SUCCESS");
      return { loading: false, error: false, itemData: action.itemData };


    case LOAD_ITEMS_ERROR:
      console.log("LOAD_ITEMS_ERROR")
      return { loading: false, error: action.error, itemData: [] };

    default:
      return state;
  }
};

export default strReducer;