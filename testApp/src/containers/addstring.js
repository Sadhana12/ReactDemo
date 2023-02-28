import { useState, loading } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButon from '../components/button/button.js';
import CustomMsg from '../components/custommsg/custommsg.js'
import { GetState, GetStateValues } from '../utils/utils'
import { addString } from '../containers/actions'
import List from '../components/list';
import ListItem from '../components/ListItem';
import LoadingIndicator from '../components/LoadingIndicator';


const AddString = () => {
	const dispatch = useDispatch();
	const [dispMsg, setDispMsg] = useState("");
	let sMsg = '';

	const strState = useSelector(state => state);
	console.log(strState);

	const strData = strState.strData;

	//if (strData.length > 0  && strData.newStr !== false)
//		sMsg = "New string successfully added to list.";

	const handleChange = (e) => {
		const result = e.target.value.replace(/[^a-z]/gi, '');
		//const result = e.target.value.replace(/^[a-z0-9]+$/i, '');
		e.target.value != result && setDispMsg("Only alphabet characters are allowed.")
		e.target.value = result;

	};

	function adduserPost() {
		//setLoading(true);

		const newStr = document.getElementById("newname").value;


		try {
			if (newStr.trim().length > 0)
				dispatch(addString(newStr));
			else
				setDispMsg("Please enter new string to add.");

			//setDispMsg("New string successfully added to list.");

		}
		catch (err) {

			//setDispMsg(err.message);
		}

		//setLoading(false);
	}

	return (
		<div className='maindiv'>
			<p>Enter new string:   <input
				type="text"
				id="newname"
				name="newname"
				defaultValue=""
				onChange={handleChange}
			/></p>
			{
				strState.loading && <List component={LoadingIndicator} />
			}
			{
				strState.error !== false && <CustomMsg txtval={strState.error} />
			}
			{dispMsg && <CustomMsg txtval={dispMsg} />}
			{sMsg && <CustomMsg txtval={sMsg} />}
			<div>
				<CustomButon onClick={adduserPost} text="Add New String" />
			</div>
		</div>
	)
};

export default AddString;
