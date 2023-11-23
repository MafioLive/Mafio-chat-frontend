import React from "react";
import TypingAnimation from "./TypingAnimation";

import "../css/TypingMessage.css";

/**
 * The TypingMessage component displays a typing animation for a given user.
 * @returns A React component that renders a div with a class name "message-item" and a child component
 * called TypingAnimation, which receives a prop called "name" with the value of the user's name.
 */
const TypingMessage = ({ user }) => {
  return (
    <div className="message-item">
      <TypingAnimation
        name={user.name}
      />
    </div>
  );
};

export default TypingMessage;
