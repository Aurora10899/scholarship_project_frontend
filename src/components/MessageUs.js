import React, { useState } from 'react'
import axios from 'axios';
import "../css/MessageUs.css"

const MessageUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('//localhost:5000/api/messages', { name, email, message });

      if (response.status === 201) {
        setSuccessMessage('Message successfully sent!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSuccessMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccessMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="message-container" >
      <div className="message-card">
        {successMessage && <h3 style={{ color: successMessage.includes('error') ? 'red' : 'green' }}>{successMessage}</h3>}
        <form onSubmit={handleSubmit}>
          <h2>Message Us</h2>
          <div className="nameBox details">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
          </div>
          <div className="emailBox details">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="email" />
          </div>
          <div className="messageBox details">
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Message....." />
          </div>
          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MessageUs;









