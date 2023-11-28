import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import ChatMessage from "./ChatMessage";

/**
 * This is a React component that renders a list of chat messages and typing indicators.
 */
const Messages = ({ messages }) => (
    <ScrollToBottom className="messages">
        <div className="messages-container">
            <ol className="messages-list">
                {messages.map((message, i) => (
                    <div key={i}>
                        <ChatMessage message={message}></ChatMessage>
                    </div>
                ))}
            </ol>
        </div>
    </ScrollToBottom>
);

export default Messages;