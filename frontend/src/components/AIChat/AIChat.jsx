import { useState } from "react";
import "./AIChat.css";

function AIChat() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="ai-chat">

      {isOpen ? (
        <div className="ai-chat-window">

          {/* HEADER */}
          <div className="ai-chat-header">

            <div className="ai-chat-header-info">

              <div className="ai-chat-avatar">
                ✦
              </div>

              <div>
                <h3>Srinivas AI</h3>

                <span>
                  ● Online
                </span>
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


          {/* BODY */}
          <div className="ai-chat-body">

            <div className="ai-message">
              Hi! I'm Srinivas's AI assistant.
              <br />
              Ask me about my projects, skills,
              education, or experience.
            </div>


            <div className="ai-suggestions">

              <button>
                My Projects
              </button>

              <button>
                My Skills
              </button>

              <button>
                My Certifications
              </button>

            </div>

          </div>


          {/* INPUT */}
          <div className="ai-chat-input">

            <input
              type="text"
              placeholder="Ask me anything..."
            />

            <button>
              ↑
            </button>

          </div>

        </div>
      ) : (

        /* ASK AI BUTTON */

        <button
          className="ai-chat-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open AI assistant"
        >
          ✦ Ask AI
        </button>

      )}

    </div>
  );
}

export default AIChat;