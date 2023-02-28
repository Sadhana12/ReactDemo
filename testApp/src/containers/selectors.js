/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducer/strreducer';

const selectGlobal = state => state.global || initialState;


const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

  const makeSelectStrList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.strData,
  );

  const makeSelectItemList = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.itemData,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectStrList,
  makeSelectItemList,
};
