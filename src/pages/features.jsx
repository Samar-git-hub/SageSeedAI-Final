import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div style={styles.featuresContainer}>
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

      <div style={styles.featuresContent}>
        <h1 style={styles.heading}>Discover SageSeek's Powerful Features</h1>
        <p style={styles.description}>
          SageSeek is an AI-powered chatbot designed to enhance productivity, assist with queries, and provide seamless conversations.
        </p>

        <div style={styles.featureList}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureItem}>
              <h2>{feature.icon} {feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  { icon: "⚡", title: "Instant Responses", description: "Get quick and intelligent replies to your queries, making conversations smooth and efficient." },
  { icon: "🧠", title: "AI-Powered Assistance", description: "Our chatbot uses advanced NLP to understand and respond contextually." },
  { icon: "🔒", title: "Secure & Private", description: "Your conversations remain confidential with state-of-the-art security and encryption." },
  { icon: "📊", title: "Integration Ready", description: "Connect SageSeek with various platforms to enhance workflow automation and efficiency." }, 
  { icon: "📞", title: "Customer Support", description: "Seamlessly connects with customer service teams to enhance user support." },
  { icon: "📈", title: "Analytics & Insights", description: "Offers valuable data insights on user interactions to improve efficiency." },
  
];

const styles = {
  featuresContainer: {
    width: "100vw",
    height: "100vh",
    background: "rgba(255, 255, 255, 0.8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: "1200px"
  },
  logo: {
    fontSize: "2em",
    fontWeight: "bold",
    color: "#B2AC88",
    fontFamily: "Sage, serif"
  },
  navList: {
    display: "flex",
    listStyle: "none"
  },
  navLink: {
    marginLeft: "20px",
    color: "#2c3e50",
    textDecoration: "none",
    fontSize: "1.1em",
    transition: "0.3s"
  },
  featuresContent: {
    textAlign: "center",
    maxWidth: "800px",
    padding: "20px"
  },
  heading: {
    fontSize: "2.5em",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#B2AC88",
    fontFamily: "Sage, serif"
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "20px",
    color: "#34495e"
  },
  featureList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center"
  },
  featureItem: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center"
  }
};

export default Features;
