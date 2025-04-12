import Navbar from '../components/Navbar';

import { useState } from 'react';

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars"
  },
  {
    question: "What galaxy do we live in?",
    answer: "Milky Way"
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
      padding: '2rem'
    }}>
      <Navbar/>
      <h1 style={{fontSize:"100px"}}><b><i>Let's Play a Game</i></b></h1>
      <h4 style={{fontSize:"50px",color:"green"}}>Anwer the following questions to check your knowledge?</h4>
      {step < questions.length ? (
        <>
          <p style={{fontSize:"30px"}}>{questions[step].question}</p>
          <form onSubmit={handleSubmit}>
            <input value={input} onChange={(e) => setInput(e.target.value)} required />
            <button type="submit"><p styles={{width:"100%",height:"100%"}}>Submit</p></button>
          </form>
          <h1>{message}</h1>
        </>
      ) : (
        <div style={{width:"500px",height:"500px"}}>
        <h1 style={{fontsize:"70px"}}>Thanks</h1>
        <h1 style={{fontsize:"70px"}}>You completed the quiz!</h1>
        </div>
      )}
    </div>
  );
};

export default Game;