import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { LOAD_STRS, ADD_STR, LOAD_ITEMS } from '../containers/constants';
import { stringsLoaded, stringsLoadingError, addStringLoaded, addStringError, itemsLoaded, itemLoadError } from '../containers/actions';



function* callAddString(action) {
  try {
    const newStr = action.newStr;
    const strlist = yield fetch('/api/adduser?q=' + newStr).then(response => response.json());
    console.log(strlist);
    yield put(addStringLoaded(newStr))
  }
  catch (err) {

    yield put(addStringError(err.message));
  }
}

function* callGetUserList(action) {
  try {
    //use saga call function instead and move fetch to new function
    const strlist = yield fetch('/api/users').then(response => response.json());
    console.log(strlist);
    yield put(stringsLoaded(strlist));
  }
  catch (err) {

    yield put(stringsLoadingError(err.message));
  }

}
/*
function getItemList() {
  return fetch('/api/items').then(response => response.json());
}
*/

function* callGetItemList(action) {
  try {
    //use saga call function instead and move fetch to new function
    const itemData = yield fetch('/api/items').then(response => response.json());
    console.log(itemData);
    yield put(itemsLoaded(itemData));
  }
  catch (err) {

    yield put(itemLoadError(err.message));
  }

  /*
  const item_list = yield getItemList();
  console.log(item_list);
  yield put({ type: 'GET_ITEM_LIST_SUCCESS', item_list })
  */

}

function* callResetUserList() {
  const str_list = [];

  yield put({ type: 'RESET_STRING_LIST_SUCCESS', str_list })
}


function* mySaga() {

  yield all([
    takeLatest('LOAD_STRS', callGetUserList),
    takeLatest('ADD_STR', callAddString),
    takeLatest('RESET_STRING_LIST', callResetUserList),
    takeLatest('LOAD_ITEMS', callGetItemList)
  ])

}
export default mySaga;