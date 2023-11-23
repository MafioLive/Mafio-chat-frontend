import React from "react";
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

import '../css/chat.css';
import sendIcon from '../icons/sendIcon.png';
import attachIcon from '../icons/attachIcon.png';
import emojiIcon from '../icons/emojiIcon.png';
import useOutsideClick from "./hooks/useOutsideClick";

/**
 * The NewMessageForm component is a form with input fields for text and file upload, as well as
 * buttons for sending messages and selecting emojis.
 * @returns A React functional component that renders a form with a textarea, buttons for uploading
 * files, sending messages, and displaying emojis. It also uses the `Picker` component from the
 * `emoji-mart` library to display a list of emojis that can be selected and added to the message.
 */
const NewMessageForm = ({
  newMessage,
  setNewMessage,
  selectFile,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,
}) => {
  const { showEmoji, setShowEmoji, ref } = useOutsideClick(false)
  const handleEmojiShow = () => { setShowEmoji((v) => !v) }
  const handleEmojiSelect = (e) => { setNewMessage((newMessage) => (newMessage += e.native)) }
  const handleNewMessageChange = (e) => { setNewMessage(e.target.value) };


  return (
    <>
      <form
        className="form"
        onSubmit={handleSendMessage}
      >
        <textarea
          className="textarea"
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyPress={handleStartTyping}
          onKeyUp={handleStopTyping}
          placeholder="Say something..."
        />
        <label htmlFor="file-input">
          <div className="uploadButton">
            <img
              className="uploadImage"
              src={attachIcon}
              alt="uploadImage" />
          </div>
        </label>
        <input
          id="file-input"
          className="input"
          onChange={selectFile}
          type="file"
        />
        <button
          className="emojiButton"
          type='button'
          onClick={handleEmojiShow}>
          <img
            className="otherImage"
            src={emojiIcon}
            alt="otherImage" />
        </button>
        <button className="sendButton">
          <img
            className="otherImage"
            src={sendIcon}
            alt="otherImage" />
        </button>
      </form>
      <div>
        {showEmoji && (
          <div ref={ref}>
            <Picker
              onSelect={handleEmojiSelect}
              emojiSize={20} />
          </div>
        )}
      </div>
    </>
  );
};

export default NewMessageForm;
