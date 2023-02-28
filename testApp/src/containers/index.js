//import { useEffect } from 'react'
//import { useDispatch, useSelector, shallowEqual } from 'react-redux';
//import { itemLoad, loadStrings } from './actions'


const Home = () => {

	/*
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadStrings());
	  }, [dispatch]);
*/

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'Center',
				alignItems: 'Right',
				height: '100vh'
			}}
		>
			<h2>Welcome to react redux application</h2>
		</div>
	);
};

export default Home;
