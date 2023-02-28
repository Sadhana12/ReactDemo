/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */


export const LOAD_STRS = 'LOAD_STRS'
export const LOAD_STRS_SUCCESS = 'LOAD_STRS_SUCCESS';
export const LOAD_STRS_ERROR = 'LOAD_STRS_ERROR';

export const ADD_STR = 'ADD_STR'
export const ADD_STR_SUCCESS = 'ADD_STR_SUCCESS';
export const ADD_STR_ERROR = 'ADD_STR_ERROR';

export const LOAD_ITEMS = 'LOAD_ITEMS'
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
export const LOAD_ITEMS_ERROR = 'LOAD_ITEMS_ERROR';
