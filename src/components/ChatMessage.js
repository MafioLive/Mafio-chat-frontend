import React from "react";
import Image from "./Image";

/**
 * The ChatMessage function renders a message container with different styles based on the message type
 * and ownership.
 * @returns The `ChatMessage` component is returning different JSX elements based on the props passed
 * to it. If the `body` prop is not an empty string, it checks if the `type` prop is "file" and renders
 * an `Image` component with the `fileName` and `blob` props. If `type` is not "file", it renders a
 * message box with the `body`
 */
const ChatMessage = ({ message: { type, body, ownedByCurrentUser, fileName, user: { name } } }) => {
  if ((body !== "")) {
    if (type === "file") {
      const blob = new Blob([body], { type: type });
      if (ownedByCurrentUser) {
        return (
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{name}</p>
            <div>
              <Image fileName={fileName} blob={blob} />
            </div>
          </div>
        )
      } else {
        return (
          <div className="messageContainer justifyStart">
            <div>
              <Image fileName={fileName} blob={blob} />
            </div>
            <p className="sentText pl-10 ">{name}</p>
          </div>
        )
      }
    }
    if (ownedByCurrentUser) {
      return (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">
              {body}
            </p>
          </div>
        </div>
      )

    } else {
      return (
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            <p className="messageText colorDark">
              {body}
            </p>
          </div>
          <p className="sentText pl-10 ">{name}</p>
        </div>
      )
    }
  } else {
    return null;
  }
};

export default ChatMessage;
