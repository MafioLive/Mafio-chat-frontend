import React, { useState, useEffect, useRef } from 'react';
import { io } from "socket.io-client";
import useTyping from "./hooks/useTyping";
import NewMessageForm from "./NewMessageForm";
import InfoBar from "./InfoBar";
import Indicator from "./Indicator";
import Messages from "./Messages";

import "../css/input.css";
import '../css/messages.css';
import '../css/message.css';

/**
 * This is a functional component that sets up a chat room with real-time messaging and typing
 * indicators using Socket.IO.
 * @param props - The `props` parameter in this code is an object that contains the properties passed
 * down to the `ChatRoom` component from its parent component. These properties can include things like
 * the `match` object (which contains information about the current URL), and any other custom props
 * that the parent component wants to
 * @returns The `ChatRoom` component is being returned, which renders the `InfoBar`, `Messages`,
 * `NewMessageForm`, and `Indicator` components. It also sets up a WebSocket connection using
 * `socket.io` and manages state for `messages`, `newMessage`, `users`, `user`, and
 * `file`. The `useEffect` hook is used to set up event
 */
const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [user,setUser] = useState();
  const [file, setFile] = useState();
  const socketRef = useRef();

  const {startTyping, stopTyping, cancelTyping } = useTyping();

  const { room, name } = props.match.params;

  const url = "http://192.168.1.117:8000/";

  socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

  useEffect(() => {
    socketRef.current = io(url, {
      query: { room, name },
    });

    setUser({
      name: name,
    });

    socketRef.current.on('allUsersData', ({ users }) => {
      setUsers(users);
      console.log(users);
    });

    socketRef.current.on("send message", (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Clean up function
    return () => {
      socketRef.current.disconnect();
    };
  }, [room, name, url]);

  const sendMessage = () => {
    if (!socketRef.current) return;
    if (file) {
      const messageObject = {
        senderId: socketRef.current.id,
        type: "file",
        body: file,
        mimeType: file.type,
        fileName: file.name,
        user: user,
      };
      setNewMessage("");
      setFile();
      socketRef.current.emit("send message", messageObject);
    } else {
      const messageObject = {
        senderId: socketRef.current.id,
        type: "text",
        body: newMessage,
        user: user,
      };
      setNewMessage("");
      socketRef.current.emit("send message", messageObject);
    }
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
  };

  function selectFile(e) {
    if (typeof e.target.files[0] !== 'undefined') {
      setNewMessage(e.target.files[0].name);
      setFile(e.target.files[0]);
    } else {
      return null;
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages}/>
        <NewMessageForm
          selectFile={selectFile}
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleStartTyping={startTyping}
          handleStopTyping={stopTyping}
          handleSendMessage={handleSendMessage}
        />
      </div>
      <Indicator users={users} />
    </div>
  );
};

export default ChatRoom;
