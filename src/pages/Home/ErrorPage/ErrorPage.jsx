import error from '../../../assets/error.gif'
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error-page">
      <img src={error} alt="Error" />
      <h2>Oops! Something went wrong.</h2>
      <p>We apologize for the inconvenience.</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;