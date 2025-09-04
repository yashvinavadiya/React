import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '10px 20px',
    backgroundColor: '#282c34',
    color: 'white',
    marginBottom: '20px',
    display: 'flex',
    gap: '20px'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      <Link to="/add" style={linkStyle}>Add Student</Link>
    </nav>
  );
}

export default Navbar;
