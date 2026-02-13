// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isDashboard, setIsDashboard] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const toggleForm = () => setIsLogin(!isLogin);

  const handleLogin = () => setIsDashboard(true);
  const handleLogout = () => setIsDashboard(false);

  const sendMessage = () => {
    if (chatInput.trim() === "") return;

    const userMsg = { type: "user", text: chatInput };
    const botMsg = { type: "bot", text: "AI response will appear here (backend required)" };

    setChatMessages([...chatMessages, userMsg, botMsg]);
    setChatInput("");
  };

  if (!isDashboard) {
    return (
      <div className="container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>{isLogin ? "Login" : "Register"}</button>
        <div className="link" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="navbar">
        <h3>AI Chatbot Dashboard</h3>
        <button onClick={handleLogout} style={{ width: "auto", padding: "6px 15px" }}>
          Logout
        </button>
      </div>

      {/* Upload Section */}
      <div className="section">
        <h3>Upload FAQs / Documents</h3>
        <input type="file" />
        <textarea rows="5" placeholder="Or paste FAQs here..."></textarea>
        <button>Upload & Train AI</button>
      </div>

      {/* Chatbot Preview */}
      <div className="section">
        <h3>Your Chatbot Preview</h3>
        <div className="chatbox">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Ask something..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      {/* Embed Code */}
      <div className="section">
        <h3>Embed Your Chatbot</h3>
        <textarea rows="3" readOnly>
{`<script src="https://yourwebsite.com/chatbot.js"></script>`}
        </textarea>
      </div>
    </div>
  );
}

export default App;










// import React from "react";
// import Weather from "./Weather";

// function App() {
//   return (
//     <div>
//       <Weather />
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
