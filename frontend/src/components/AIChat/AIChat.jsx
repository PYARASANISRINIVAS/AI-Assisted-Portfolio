import { useState, useEffect, useRef } from "react";
import "./AIChat.css";

function AIChat() {
  const [isOpen, setIsOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      text: "Hi! I'm Srinivas's AI assistant. Ask me about his projects, skills, education, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);


  /* =========================================
     AUTO SCROLL
  ========================================= */

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);


  /* =========================================
     SUGGESTED QUESTIONS
  ========================================= */

  const suggestions = [
    "Tell me about Srinivas",
    "What projects has he built?",
    "What are his skills?",
    "What certifications does he have?",
  ];


  /* =========================================
     SEND MESSAGE
  ========================================= */

const sendMessage = async (messageText = input) => {
  const text = messageText.trim();

  if (!text || isTyping) return;

  const userMessage = {
    id: Date.now(),
    type: "user",
    text,
  };

  setMessages((current) => [
    ...current,
    userMessage,
  ]);

  setInput("");
  setIsTyping(true);

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/chat",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: text,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to get response from backend");
    }

    const data = await response.json();

    setMessages((current) => [
      ...current,
      {
        id: Date.now() + 1,
        type: "assistant",
        text: data.answer,
      },
    ]);
  } catch (error) {
    console.error("AI Chat Error:", error);

    setMessages((current) => [
      ...current,
      {
        id: Date.now() + 1,
        type: "assistant",
        text: "Sorry, I couldn't connect to the AI assistant right now.",
      },
    ]);
  } finally {
    setIsTyping(false);
  }
};

  /* =========================================
     ENTER KEY
  ========================================== */

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  };


  return (
    <div className="ai-chat">


      {/* =====================================
          CHAT WINDOW
      ===================================== */}

      {isOpen && (

        <div className="ai-chat-window">


          {/* =================================
              HEADER
          ================================= */}

          <div className="ai-chat-header">

            <div className="ai-chat-header-left">

              <div className="ai-chat-avatar">
                ✦
              </div>

              <div className="ai-chat-title">

                <h3>
                  Srinivas AI
                </h3>

                <div className="ai-chat-status">

                  <span className="ai-status-dot"></span>

                  <span>
                    Online
                  </span>

                </div>

              </div>

            </div>


            <button
              className="ai-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close AI assistant"
            >
              ×
            </button>

          </div>



          {/* =================================
              MESSAGES
          ================================= */}

          <div className="ai-chat-messages">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`ai-message ${
                  message.type === "user"
                    ? "ai-message-user"
                    : "ai-message-assistant"
                }`}
              >

                {message.type === "assistant" && (

                  <div className="ai-small-avatar">
                    ✦
                  </div>

                )}

                <div className="ai-message-bubble">
                  {message.text}
                </div>

              </div>

            ))}


            {/* =================================
                TYPING INDICATOR
            ================================= */}

            {isTyping && (

              <div className="ai-message ai-message-assistant">

                <div className="ai-small-avatar">
                  ✦
                </div>

                <div className="ai-typing">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

              </div>

            )}


            <div ref={messagesEndRef} />

          </div>



          {/* =================================
              SUGGESTIONS
          ================================= */}

          {messages.length === 1 && (

            <div className="ai-suggestions">

              <p>
                Try asking
              </p>

              <div className="ai-suggestion-list">

                {suggestions.map(
                  (suggestion) => (

                    <button
                      key={suggestion}
                      onClick={() =>
                        sendMessage(suggestion)
                      }
                    >
                      {suggestion}
                    </button>

                  )
                )}

              </div>

            </div>

          )}



          {/* =================================
              INPUT
          ================================= */}

          <div className="ai-chat-input-area">

            <textarea
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows="1"
            />

            <button
              className="ai-send-button"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
            >
              ↑
            </button>

          </div>


          {/* =================================
              FOOTER
          ================================= */}

          <div className="ai-chat-footer">
            AI assistant • Portfolio
          </div>

        </div>

      )}



      {/* =====================================
          FLOATING BUTTON
      ===================================== */}

      {!isOpen && (

        <button
          className="ai-chat-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI assistant"
        >

          <span className="ai-launcher-icon">
            ✦
          </span>

          <span className="ai-launcher-text">
            Ask AI
          </span>

        </button>

      )}

    </div>
  );
}

export default AIChat;