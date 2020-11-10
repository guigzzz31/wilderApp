import React from "react";
import Skill from "./Skill";
import { Card, List } from "./styles/elements";
import blank_profile from "./icons/blank-profile-picture-female.png";

function Wilder({ _id, city, justAdded, name, skills, deleteWilder }) {
  return (
    <Card newCard={justAdded}>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill._id} {...skill} />
        ))}
      </List>
      <button onClick={() => deleteWilder(_id)}>Delete</button>
    </Card>
  );
}

export default Wilder;
