import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../api/api';
import './FaqWidget.css';

const FaqWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! I am the LearnPath FAQ Bot. Ask me anything about the platform.' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/faq-bot/chat`, {
        message: userMessage
      });

      setMessages(prev => [...prev, { sender: 'bot', text: response.data }]);
    } catch (error) {
      console.error("Error connecting to FAQ bot:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I am having trouble connecting to the server right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="faq-widget-container">
      {isOpen && (
        <div className="faq-chat-window shadow-lg">
          <div className="faq-chat-header bg-primary text-white p-3 d-flex justify-content-between align-items-center">
            <h5 className="mb-0">FAQ Support</h5>
            <button className="btn-close btn-close-white" onClick={toggleChat} aria-label="Close"></button>
          </div>

          <div className="faq-chat-body p-3">
            {messages.map((msg, index) => (
              <div key={index} className={`message-container ${msg.sender}`}>
                <div className={`message-bubble ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light border'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="message-container bot">
                <div className="message-bubble bg-light border text-muted">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="faq-chat-footer p-2 border-top d-flex gap-2">
            <input
              type="text"
              className="form-control"
              placeholder="Type your question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className="btn btn-primary" disabled={isLoading || !inputMessage.trim()}>
              Send
            </button>
          </form>
        </div>
      )}

      {!isOpen && (
        <button
          className="faq-floating-btn btn btn-primary rounded-circle shadow-lg"
          onClick={toggleChat}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chat-dots-fill" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default FaqWidget;
