import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleNameChange = (event) => {
    const newName = event.target.value.slice(0, 16); // Restrict name to a maximum of 16 characters
    setName(newName);
  };

  const isNameValid = name.length > 0 && name.length <= 16; // Check if name is valid


  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={handleNameChange}
            className={`joinInput ${isNameValid ? "" : "invalid"}`}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
            className="joinInput mt-20"
          />
        </div>
        <Link
          onClick={(event) => (!name || !room) && event.preventDefault()}
          to={`/chat/name=${name}-room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;