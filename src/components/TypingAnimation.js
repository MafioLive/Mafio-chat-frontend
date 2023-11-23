import React from "react";
import "../css/TypingAnimation.css";

/**
 * The TypingAnimation function returns a component that displays a message and three animated dots to
 * indicate that someone is typing.
 * @returns A React functional component that renders a container with a message indicating that
 * someone is typing, and three dots that will be animated to simulate typing. The name of the person
 * typing is passed as a prop to the component and displayed in the message.
 */
const TypingAnimation = ({ name }) => {
  return (
    <div className="dotsContainer">
      <p>{name} is typing</p>
      <span id="dot1"></span>
      <span id="dot2"></span>
      <span id="dot3"></span>
    </div>
  );
};

export default TypingAnimation;
