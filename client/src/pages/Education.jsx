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
      <h1 style={{fontSize:"100px"}}><b><i>Learn About Space</i></b></h1>

      <h3 style={{fontSize:"50px"}}>Explore The Space</h3>
      <ul>
      <li><a href="https://solarsystem.nasa.gov/" target="_blank" rel="noreferrer"><b style={{fontSize:"30px"}}>NASA Solar System Exploration</b></a></li>
      <li><a href="https://www.esa.int/" target="_blank" rel="noreferrer"><b style={{fontSize:"30px"}}>European Space Agency (ESA)</b></a></li>
      <li><a href="https://hubblesite.org/" target="_blank" rel="noreferrer"><b style={{fontSize:"30px"}}>HubbleSite</b></a></li>
      </ul>
      <div style={{width:"100%",height:"100%"}}>
        <h3 style={{fontSize:"50px"}}>Dive Into The Space</h3>

        <h4 style={{fontSize:"25px"}}><center>Mystery of Apollo 13 Mission</center></h4>
        <iframe
   src="https://www.youtube.com/embed/uwekHBt4KIs?si=_QLEtzycCS4JHtKq&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%', height: '40vh', border: '5px solid black'}}>
        </iframe>
        <h4 style={{fontSize:"25px"}}><center>10 Mysterious facts about Black Holes! </center></h4>
        <iframe
       src="https://www.youtube.com/embed/MzCyx4Fofk4?si=ptNlTEeFJmIJAWH1&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%', height: '40vh', border: '5px solid black'}}>
        </iframe>

        <h4 style={{fontSize:"25px"}}><center>NASA's New Rocket to Visit Mars in 100 Days?</center></h4>
        <iframe
      src="https://www.youtube.com/embed/RNZeqzXFatI?si=0pOoKifJYf1sbPpj&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ width: '100%', height: '40vh', border: '5px solid black', display:"flex"}}>
        </iframe>
        </div>

    </div>
  );
};

export default Education;