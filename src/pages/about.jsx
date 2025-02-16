import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const About = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>SageSeed</div>
        <nav>
          <ul style={styles.navList}>
            <li><Link to="/" style={styles.navLink}>Home</Link></li>
            <li><Link to="/features" style={styles.navLink}>Features</Link></li>
            <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
            <li><Link to="/about" style={styles.navLink}>About</Link></li>
          </ul>
        </nav>
      </header>

      <div style={{...styles.content, paddingTop: '80px'}}>
        <h1 style={styles.mainHeading}>About SageSeed</h1>
        
        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Our Mission</h2>
          <p style={styles.paragraph}>
            SageSeed is transforming the startup ecosystem by providing cutting-edge AI-powered support for entrepreneurs. 
            We are committed to empowering innovative minds by breaking down barriers and offering intelligent, 
            accessible guidance that turns potential into tangible success.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Our Vision</h2>
          <p style={styles.paragraph}>
            We envision a future where innovative ideas can rapidly evolve into thriving businesses. 
            By harnessing advanced AI technology, we provide entrepreneurs with instant, actionable insights 
            and strategic support that traditionally would require extensive research and mentorship.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Core Values</h2>
          <ul style={styles.list}>
            <li>Technological Empowerment</li>
            <li>Continuous Learning and Innovation</li>
            <li>Ethical and Transparent AI Development</li>
            <li>Inclusive Entrepreneurial Support</li>
          </ul>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionHeading}>Our AI-Powered Solutions</h2>
          <p style={styles.paragraph}>
            SageSeed delivers a comprehensive suite of intelligent tools designed to support entrepreneurs 
            at every stage of their journey:
          </p>
          <ul style={styles.list}>
            <li>Advanced Idea Validation: Comprehensive feedback on startup concepts</li>
            <li>Strategic AI Guidance: Personalized business intelligence</li>
            <li>Curated Resource Hub: Targeted entrepreneurial insights</li>
          </ul>
        </div>

        <div style={styles.ctaContainer}>
          <Link to="/contact" style={{textDecoration: 'none'}}>
            <button 
              style={{
                ...styles.ctaButton,
                ':hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 20px rgba(178, 172, 136, 0.4)'
                }
              }}
            >
              Start Your Entrepreneurial Journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
  },
  header: {
    position: 'absolute',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '90%',
    maxWidth: '1200px',
  },
  logo: {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#B2AC88',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
  },
  navLink: {
    marginLeft: '20px',
    color: '#2c3e50',
    textDecoration: 'none',
    fontSize: '1.1em',
    transition: '0.3s',
  },
  content: {
    maxWidth: '800px',
    textAlign: 'left',
    width: '100%',
  },
  mainHeading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#B2AC88',
    fontSize: '2.5em',
    marginTop: '150px',
    fontFamily: "Sage, serif",
  },
  section: {
    marginBottom: '30px',
  },
  sectionHeading: {
    color: '#B2AC88',
    marginBottom: '15px',
    fontSize: '1.5em',
  },
  paragraph: {
    color: '#34495e',
    lineHeight: '1.6',
    fontSize: '1em',
  },
  list: {
    color: '#34495e',
    lineHeight: '1.6',
    fontSize: '1em',
    paddingLeft: '20px',
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '30px',
  },
  ctaButton: {
    background: '#B2AC88',
    color: 'white',
    padding: '15px 35px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(178, 172, 136, 0.3)',
  },
};

export default About;