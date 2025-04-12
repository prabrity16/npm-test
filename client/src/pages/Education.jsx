import Navbar from "../components/Navbar";


const Education = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'black',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <Navbar/>
      <h1 style={{fontSize:"100px"}}><b><i>Educational Resources</i></b></h1>
      <ul>
        <li><a href="https://solarsystem.nasa.gov/" target="_blank" rel="noreferrer">NASA Solar System Exploration</a></li>
        <li><a href="https://www.esa.int/" target="_blank" rel="noreferrer">European Space Agency (ESA)</a></li>
        <li><a href="https://hubblesite.org/" target="_blank" rel="noreferrer">HubbleSite</a></li>
      </ul>
    </div>
  );
};

export default Education;