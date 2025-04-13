import Navbar from "../components/Navbar";

const ContactUs = () => {
  return (
    <div style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1950&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '3rem',
      color: 'Black',
      backdropFilter: 'blur(2px)'
    }}>
      <Navbar/>
      <h1 style={{ fontSize: '100px', marginBottom: '1rem', color:"black"}}><b><i>ContactUs</i></b></h1>
      <p style={{ marginBottom: '2rem', fontSize: '2rem' }}>
        Have questions, suggestions, or just want to say hello? We're here for you.
      </p>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem'
      }}>
        <form style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <input type="text" placeholder="Your Name" required
            style={{
              padding: '1rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <input type="email" placeholder="Your Email" required
            style={{
              padding: '1rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <textarea placeholder="Your Message" rows="5" required
            style={{
              padding: '1rem',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem'
            }}
          />
          <button type="submit"
            style={{
              padding: '1rem',
              backgroundColor: '#111',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Send Message
          </button>
        </form>

        <div style={{
          flex: 1,
          backgroundColor: 'rgba(121, 112, 112, 0.5)',
          padding: '1rem',
          borderRadius: '10px'
        }}>
          <h3>Our Info</h3>
          <p>Email: support@spacetour.com</p>
          <p>Phone:+91 98765 4321</p>
          <p>Address: Earth Orbit, Space HQ</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;