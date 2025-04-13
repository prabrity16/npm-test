import Navbar from '../components/Navbar';
import { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login clicked with email: ${user.email}`);
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
      <h1 style={{fontSize:"100px"}}><b><i>Login to SpaceTour</i></b></h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%'}}>
        <p style={{fontSize: "30px", width:"500px", height:"30px"}}>Enter Your Email: <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required style={{height:"25px",width:"500px" }} /></p>
        <p style={{fontSize: "30px", width:"500px", height:"30px"}}>Enter Your Password:<input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required style={{height:"25px",width:"500px" }} /></p>
        <br/>


        <p style={{height:"35px",width:"500px"}}><button type="submit">Login</button></p>
        <p style={{fontSize: "30px", width:"500px", height:"30px"}}><b>Don't have an account?</b> <a href="#">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;

