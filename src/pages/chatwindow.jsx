import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/ChatWindow.css";

const ChatWindow = ({ generateAnswer }) => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI assistant. How can I help you today?", user: "AI" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim()) {
      // Add user message
      const userMessage = { text: input, user: "You" };
      setMessages(prevMessages => [...prevMessages, userMessage]);
      
      // Clear input
      const currentInput = input;
      setInput("");

      // Set loading state
      setIsLoading(true);

      try {
        // Get AI response
        const aiResponse = await generateAnswer(currentInput);
        
        // Add AI response
        setMessages(prevMessages => [
          ...prevMessages, 
          { text: aiResponse, user: "AI" }
        ]);
      } catch (error) {
        // Handle error
        setMessages(prevMessages => [
          ...prevMessages, 
          { text: "Sorry, I couldn't process your request.", user: "AI" }
        ]);
      } finally {
        // Reset loading state
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="chat-container">
      <header>
        <div className="logo">SageSeed</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`message ${msg.user === "You" ? "user" : "ai"}`}
            >
              {msg.user}: {msg.text}
            </div>
          ))}
          {isLoading && (
            <div className="message ai">
              AI: Thinking...
            </div>
          )}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <button 
            onClick={handleSend} 
            className="send-button"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
// import React, { useState } from "react";
// import "../styles/App.css";
// import "../styles/ChatWindow.css";
// import { Link } from "react-router-dom";

// const ChatWindow = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (input.trim()) {
//       setMessages([...messages, { text: input, user: "You" }]);
//       setInput("");
//       setTimeout(() => {
//         setMessages((prev) => [...prev, { text: "analysing...", user: "AI" }]);
//       }, 1000);
//     }
//   };

//   return (
//     <div className="chat-container">
//       <header>
//         <div className="logo">SageSeed</div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/features">Features</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>
//         </nav>
//       </header>
      
//       <div className="chat-box">
//         <div className="messages">
//           {messages.map((msg, index) => (
//             <div key={index} className={msg.user === "You" ? "message user" : "message ai"}>
//               <strong>{msg.user}: </strong>{msg.text}
//             </div>
//           ))}
//         </div>
//         <div className="input-area">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button onClick={handleSend} className="send-button">Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWindow;
