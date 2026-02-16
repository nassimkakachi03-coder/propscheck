import React from "react";
import players from "../src/players.js";
import Player from "../src/player.jsx";

export default function PlayersList() {
  return (
    <div
      style={{
        backgroundImage: "url('/stadium.webp')",
        backgroundSize: "cover", // ← AJOUTE
        backgroundPosition: "center", // ← AJOUTE
        backgroundAttachment: "fixed",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {players.map((player) => (
        <Player key={player.name} player={player} />
      ))}
    </div>
  );
}
