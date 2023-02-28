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

export  function StringList ()
  {
	const dispatch = useDispatch();
	
	const strState = useSelector(state => state);
	console.log(strState);
	
	const  strData = strState.strData;

	
	function LoadUserList() {
		dispatch(loadStrings());
	}


	return (
		<div className='maindiv'>

			<input type="hidden" text={typeof (str_list)}/>

			<div><CustomButon onClick={LoadUserList} text="Get String List" /></div>

			{
				strState.loading && <List component={LoadingIndicator} />
			}
			{
				strState.error !== false && <CustomMsg txtval={strState.error} />
			}

			{
				strData.length > 0 && <div><ul className='maindiv_ul'>{strData.map((str) => (<li className='maindiv_li'>{str.text}</li>))}</ul></div>
			}
		</div>

	);
}
 export default StringList;