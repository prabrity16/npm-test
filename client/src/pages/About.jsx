import Navbar from "../components/Navbar";

const About = () => {
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
   <h1 style={{fontSize:"100px"}}><b><i>About SpaceTour</i></b></h1>
   <p style={{fontSize:"30px",color:"#08785"}}>
          At <strong>SpaceTour</strong>, our mission is to bring the wonders of space closer to everyone. Whether you're an aspiring astronomer or just curious about the cosmos, we offer a place to learn, explore, and dream.
        </p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"60px",olor:"11111"}}>@ Our Vision</h2>
        <p style={{fontSize:"30px",color:"#1a1a1a"}}>
          We aim to make space education interactive, accessible, and exciting for all. With engaging tools, a star map, and fun games — SpaceTour turns curiosity into knowledge.
        </p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"60px" }}>@ Our Team</h2>
        <ul style={{fontSize:"30px",color:"#0d0d0d"}}>
          <li><strong>Muskan</strong> - Project Lead & Designer</li>
          <li><strong>Priya</strong> - Frontend Developer</li>
          <li><strong>Prabrity</strong> - Backend Engineer</li>
          <li><strong>Anchal</strong> - Astronomy Content Creator</li>
        </ul>

        <h2 style={{ marginTop: '1.5rem',fontSize:"60px" }}>@ What We Offer</h2>
        <ul style={{fontSize:"30px",color:"#0d0d0d"}}>
          <li>Interactive Sky Maps (real-time star tracking)</li>
          <li>Planetary Facts and Visuals</li>
          <li>Space-based Puzzle Games</li>
          <li>Educational Resources and Quizzes</li>
          <li>Real NASA Image Integration</li>
        </ul>

        <h2 style={{ marginTop: '1.5rem',fontSize:"60px"}}>@ Did You Know?</h2>
        <p style={{fontSize:"30px",color:"#0d0d0d"}}>The Moon is slowly drifting away from Earth — about 3.8 cm every year!</p>
        <p style={{fontSize:"30px",color:"#0d0d0d"}}>Jupiter's Great Red Spot is a storm that's been raging for over 350 years!</p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"60px" }}>@ Join Us</h2>
        <p style={{fontSize:"30px",color:""}}>Want to contribute or collaborate? Reach out via the <strong>Contact</strong> page. Let's explore the universe together!</p>

    </div>
  );
};

export default About;