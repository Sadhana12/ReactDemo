/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */


import { LOAD_STRS, LOAD_STRS_SUCCESS, LOAD_STRS_ERROR} from './constants'
import { ADD_STR, ADD_STR_SUCCESS, ADD_STR_ERROR} from './constants'
import {LOAD_ITEMS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR} from './constants'

/**
 * Load the String list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STRS
 */
export function loadStrings() {
  return {
    type: LOAD_STRS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} strlist The string list  data
 *
 * @return {object}      An action object with a type of LOAD_STRS_SUCCESS passing the repos
 */
export function stringsLoaded(strlist) {
  return {
    type: LOAD_STRS_SUCCESS,
    strlist,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STRS_ERROR passing the error
 */
export function stringsLoadingError(error) {
  return {
    type: LOAD_STRS_ERROR,
    error,
  };
}

/**
 * Load the String list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STRS
 */
export function addString(newStr) {
  return {
    type: ADD_STR,
    newStr
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} strlist The string list  data
 *
 * @return {object}      An action object with a type of type: ADD_STR_SUCCESS, passing the repos
 */
export function addStringLoaded(newStr) {
  return {
    type: ADD_STR_SUCCESS,
    newStr,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STR_ERROR passing the error
 */
export function addStringError(error) {
  return {
    type: ADD_STR_ERROR,
    error,
  };
}


/**
 * Load the item list, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_ITEMS
 */
export function itemLoad() {
  return {
    type: LOAD_ITEMS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} strlist The string list  data
 *
 * @return {object}      An action object with a type of type: ADD_STR_SUCCESS, passing the repos
 */
export function itemsLoaded(itemData) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    itemData,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_STR_ERROR passing the error
 */
export function itemLoadError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}