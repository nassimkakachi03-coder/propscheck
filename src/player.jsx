import { useState } from "react";
import Card from "react-bootstrap/Card";

function Player({ player: { name, age, position, country, club, image } }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className={isHovered ? "shadow-lg" : "shadow"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "20rem",
        margin: "15px",
        borderRadius: "15px",
        backgroundColor: "#1b5e20",
        color: "white",
        overflow: "hidden",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
    >
      {/* Image ronde du joueur */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #fff",
          }}
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          {name}
        </Card.Title>

        <Card.Text style={{ fontSize: "1rem", marginBottom: "5px" }}>
          <strong>Position:</strong> {position}
        </Card.Text>
        <Card.Text style={{ fontSize: "1rem", marginBottom: "5px" }}>
          <strong>Country:</strong> {country}
        </Card.Text>
        <Card.Text style={{ fontSize: "1rem", marginBottom: "5px" }}>
          <strong>Club:</strong> {club}
        </Card.Text>
        <Card.Text style={{ fontSize: "1rem", marginBottom: "5px" }}>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
Player.defaultProps = {
  player: {
    name: "unknown",
    age: "N/A",
    position: "N/A",
    country: "N/A",
    club: "N/A",
    image: "",
  },
};

export default Player;
