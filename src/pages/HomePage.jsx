import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="hero">
        <header>
          <div className="logo" style={{ color: '#B2AC88', fontFamily: 'Sage, serif' }}>SageSeed</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
        </header>

        <div className="hero-content" style={{ marginTop: '80px' }}>
          <h1>Your AI Co-Founder Journey</h1>
          <p>Smart, efficient, and always ready to assist you.</p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px' }}>
            <Link to="/chatwindow">
              <button className="start-chat">
                Start Chat
              </button>
            </Link>
            <Link to="/IdeaValidation">
              <button className="start-chat">
                Validate Idea
              </button>
            </Link>
          <Link to="/market analysis">
              <button className="start-chat">
                Market Analysis
              </button>
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <div style={cardStyle}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>🚀</div>
              <h3 style={{ marginBottom: '10px', color: '#27ae60' }}>Idea Validation</h3>
              <p>Get instant AI feedback</p>
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>💡</div>
              <h3 style={{ marginBottom: '10px', color: '#27ae60' }}>AI Strategy</h3>
              <p>Develop your roadmap</p>
            </div>
            <div style={cardStyle}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>💰</div>
              <h3 style={{ marginBottom: '10px', color: '#27ae60' }}>Fundraising</h3>
              <p>Prepare for success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center'
};

export default HomePage;