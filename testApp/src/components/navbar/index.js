import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to='/' activeStyle>
						Home
					</NavLink>
					<NavLink to='/StringList' activeStyle>
						String List
					</NavLink>
					<NavLink to='/AddString' activeStyle>
						Add New String
					</NavLink>
					<NavLink to='/demo' activeStyle>
						Demo
					</NavLink>

				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
