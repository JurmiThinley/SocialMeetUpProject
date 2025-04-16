import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="navbar">
      <div>Meetup App</div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/host">Host</Link>
      </div>
    </div>
  );
}
