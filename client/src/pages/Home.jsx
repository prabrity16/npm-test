import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">SpaceTour</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/education">Education</a></li>
          <li><a href="/skymap">SkyMap</a></li>
          
          <li><a href="/game">Game</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <h2>Explore the Universe</h2>
        <p>Start your cosmic journey with SpaceTour!</p>
      </div> 

      <div>
        
      </div>
    </div>
  );
};

export default Home;