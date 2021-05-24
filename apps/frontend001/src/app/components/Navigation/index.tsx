import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul className="flex">
				<li className="mr-6">
					<Link className="text-blue-500 hover:text-blue-800" to={"/"}>
						Home
					</Link>
				</li>
			<li className="mr-6">
				<Link className="text-blue-500 hover:text-blue-800" to={"/login"}>
					Sing in
				</Link>
			</li>
			<li className="mr-6">
				<Link className="text-blue-500 hover:text-blue-800" to={"/register"}>
					Sing up
				</Link>
			</li>
			<li className="mr-6">
				<Link className="text-gray-400 cursor-not-allowed" to={"/profile"}>
					Profile
				</Link>
			</li>
		</ul>
	</nav>
	);
};

export default Navigation;
