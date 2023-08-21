import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState();
  const handleJoin = () => {
    navigate(`/room/${roomId}`);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <input
          type="text"
          placeholder="Enter your Room ID"
          value={roomId}
          className="inputText"
          onChange={(e) => setRoomId(e.target.value)}
        ></input>
        <button className="joinBtn" onClick={handleJoin}>
          Join
        </button>
      </div>
    </div>
  );
};

export default Home;
