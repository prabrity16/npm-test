import { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', form);
      setResponse(res.data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setResponse('Failed to send message');
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
      <h1 style={{fontSize:"100px"}}><b><i>Contact Us</i></b></h1>
      {response && <p>{response}</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;