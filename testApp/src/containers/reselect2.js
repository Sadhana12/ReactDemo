import { React, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import ReSelectListItem from './reselistitem'
import { itemLoad } from './actions'
import { createSelector } from 'reselect'

import { initialState } from '../reducer/strreducer';

const ReSelect = () => {
  const dispatch = useDispatch();

/*
  const { itemData, loading, error } = useSelector(
    state => ({
      error: state.error,
      itemData: state.itemData,
      loading: state.loading
    })
  );
*/
const selectGlobal = state => state.global || initialState;
const itemData =   createSelector(selectGlobal, globalState => globalState.itemData,);
const loading =   createSelector(selectGlobal, globalState => globalState.loading,);
const error =   createSelector(selectGlobal, globalState => globalState.error,);

  useEffect(() => {
    dispatch(itemLoad());
  }, [dispatch]);

  // if (error) { return <div>Error! {error.message}</div>; }
  //if (error) { return <div>Error! {error}</div>; }
  //if (loading) { return <div>Loading...</div>; }
 console.log(itemData);
 console.log(loading)
 

  return <ReSelectListItem item_list={itemData} loading={loading} error={error} />
  /*
  return (
    {
      dataLength > 0 &&
    <ul>
        <React.Fragment>
          {itemData.map(item => {
            return (
              <li key={item.ItemId}>{item.Category}/{item.ItemName}</li>
            );
          })}
        </React.Fragment>
    </ul>
        }
  )
  */
};

/*
useEffect(() => {
  dispatch(itemLoad());
});
*/

//const item_list2 = useSelector(state => state.item_list);
//const todoIds = useSelector(selectTodoIds, shallowEqual)
/*
const stateData = useSelector(state => state);
console.log(stateData);
	
const  itemData = stateData.itemData;

//return <div className='maindiv'><ReSelectListItem item_list={itemData} /></div>
return <div></div>
}
*/
export default ReSelect