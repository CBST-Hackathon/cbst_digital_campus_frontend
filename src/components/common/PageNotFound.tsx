import { Link } from 'react-router';

const PageNotFound = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="text-center">
				<h1>Page Not Found</h1>
				<Link to="/">Go back to Home</Link>
			</div>
		</div>
	); 
};

export default PageNotFound;
