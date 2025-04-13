import Navbar from '../components/Navbar';

import { useState } from 'react';

const questions = [
  {
    question: "1. Which planet is known as the Red Planet?",
    answer: "Mars"
  },
  {
    question: "2. What galaxy do we live in?",
    answer: "Milky Way"
  },
  {
    question: "3. What is the closest planet to the Sun?",
    answer: "Mercury"
  },
  {
    question: "4. What do we call the natural satellite that orbits Earth?",
    answer: "Moon"
  },
  {
    question: "5. What is the name of the first human to travel into space?",
    answer: "Yuri Gagarin"
  },
  {
    question: "6. What is the term for a large body of ice and dust that orbits the Sun?",
    answer: "Comet"
  },
  {
    question: "7. What is the name of the force that keeps planets in orbit around the Sun?",
    answer: "Gravity"
  },
  {
    question: "8. What is the name of the spacecraft that first landed humans on the Moon?",
    answer: "Apollo 11"
  }
];

const Game = () => {
  const [step, setStep] = useState(0);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === questions[step].answer.toLowerCase()) {
      setMessage("Correct!");
      setTimeout(() => {
        setStep(step + 1);
        setInput('');
        setMessage('');
      }, 1000);
    } else {
      setMessage("Try again!");
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'black',
      minHeight: '100vh',
      padding: '1rem'
    }}>
      <Navbar/>
      <h1 style={{fontSize:"70px"}}><b><i>Let's Play a Game</i></b></h1>
      <h4 style={{fontSize:"30px",color:"dark green"}}>Anwer the following questions to check your knowledge?</h4>
      {step < questions.length ? (
        <>
          <p style={{fontSize:"30px"}}><b>{questions[step].question}</b></p>
          <form onSubmit={handleSubmit}>
            <input style={{height:"25px",width:"500px"}} value={input} onChange={(e) => setInput(e.target.value)} required />
            <button type="submit"><p styles={{width:"100%",height:"100%"}}>Submit</p></button>
          </form>
          <h1>{message}</h1>
        </>
      ) : (
        <div style={{width:"100%",height:"100px"}}><center>
        <h1 style={{fontsize:"70px"}}>Thanks</h1>
        <h1 style={{fontsize:"70px"}}>You completed the quiz!</h1>
        </center>
        </div>
      )}


      {/* <iframe   src="https://spaceplace.nasa.gov/puzzle-solar-system/en/"
        title="Space Game Puzzle"
        style={{ width: '100%', height: '60vh', border: 'none' }}
        /> */}
    </div>
  );
};

export default Game;