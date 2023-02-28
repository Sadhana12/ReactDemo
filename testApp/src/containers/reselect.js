import React, { useState, memo, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CustomButon from '../components/button/button';
import CustomMsg from '../components/custommsg/custommsg';
import {
	makeSelectStrList,
	makeSelectLoading,
	makeSelectError,
  } from './selectors';
import { loadStrings } from './actions';
import List from '../components/list';
import ListItem from '../components/ListItem';
import LoadingIndicator from '../components/LoadingIndicator';
import {GetState, GetStateValue} from '../utils/utils'
import { createSelector } from 'reselect'
import { initialState } from '../reducer/strreducer';

export  function StringList ({
  loading,
  error,
  strData,
  onLoadStrings
}) 
  {
    const strListProps = {
      loading,
      error,
      strData,
    };
	const dispatch = useDispatch();

	//const strState = useSelector(state => state);
  /*
const selectGlobal = state => state.global || initialState;
const strData =   createSelector(selectGlobal, globalState => globalState.strData,);
const loading =   createSelector(selectGlobal, globalState => globalState.loading,);
const error =   createSelector(selectGlobal, globalState => globalState.error,);
*/
/*
	console.log(strState);
	
	const  strData = strState.strData;
*/
	
	function LoadUserList() {
		dispatch(loadStrings());
	}


	return (
		<div className='maindiv'>

			<input type="hidden" text={typeof (str_list)}/>

			<div><CustomButon onClick={onLoadStrings} text="Get String List" /></div>

			{
				loading && <List component={LoadingIndicator} />
			}
			{
				error !== false && <CustomMsg txtval={error} />
			}

			{
				strData.length > 0 && <div><ul className='maindiv_ul'>{strData.map((str) => (<li className='maindiv_li'>{str.text}</li>))}</ul></div>
			}
		</div>

	);
}
StringList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  strlist: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  strData: makeSelectStrList(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
   // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
   onLoadStrings: evt => {
      //if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStrings());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

//export default StringList;


export default compose(
  withConnect,
  memo,
)(StringList);