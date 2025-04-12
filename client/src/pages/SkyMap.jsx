import Navbar from "../components/Navbar";


const SkyMap = () => {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Navbar/>
      <h1 style={{fontSize:"45px"}}><b><i>Interactive Sky Map</i></b></h1>
      <p style={{fontSize:""}}>This will feature a real-time star map soon!</p>
      <iframe
        src="https://stellarium-web.org"
        title="Sky Map"
        style={{ width: '100%', height: '80vh', border: 'none' }}
      />
    </div>
  );
};

export default SkyMap;