import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      color:"black",
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      width: '95%',
    }}>
      <h2 style={{ color: '#000000',fontSize:"0px" }}></h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/education" style={linkStyle}>Education</Link>
        <Link to="/skymap" style={linkStyle}>Sky Map</Link>
        <Link to="/game" style={linkStyle}>Game</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  fontSize:"20px",
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  fontWeight: 'bold'
};

export default Navbar;