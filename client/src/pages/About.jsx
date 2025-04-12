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
   <p >
          At <strong>SpaceTour</strong>, our mission is to bring the wonders of space closer to everyone. Whether you're an aspiring astronomer or just curious about the cosmos, we offer a place to learn, explore, and dream.
        </p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px"}}>@ Our Vision</h2>
        <p>
          We aim to make space education interactive, accessible, and exciting for all. With engaging tools, a star map, and fun games — SpaceTour turns curiosity into knowledge.
        </p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px" }}>@ Our Team</h2>
        <ul>
          <li><strong>Raj</strong> - Project Lead & Designer</li>
          <li><strong>Anya</strong> - Frontend Developer</li>
          <li><strong>Dev</strong> - Backend Engineer</li>
          <li><strong>Tara</strong> - Astronomy Content Creator</li>
        </ul>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px" }}>@ What We Offer</h2>
        <ul>
          <li>Interactive Sky Maps (real-time star tracking)</li>
          <li>Planetary Facts and Visuals</li>
          <li>Space-based Puzzle Games</li>
          <li>Educational Resources and Quizzes</li>
          <li>Real NASA Image Integration</li>
        </ul>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px"}}>@ Did You Know?</h2>
        <p>The Moon is slowly drifting away from Earth — about 3.8 cm every year!</p>
        <p>Jupiter’s Great Red Spot is a storm that's been raging for over 350 years!</p>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px" }}>@ Testimonials</h2>
        <blockquote>
          “SpaceTour made learning space science fun and easy!” - Aakash, Student
        </blockquote>
        <blockquote>
          “I love the interactive map, it's like I'm stargazing from home!” - Priya, Teacher
        </blockquote>

        <h2 style={{ marginTop: '1.5rem',fontSize:"40px" }}>@ Join Us</h2>
        <p style={{fontSize:"20px",color:""}}>Want to contribute or collaborate? Reach out via the <strong>Contact</strong> page. Let's explore the universe together!</p>

    </div>
  );
};

export default About;