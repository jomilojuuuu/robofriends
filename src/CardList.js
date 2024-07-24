import React from "react";
import Card from "./Card";
import { robot } from "./robot";

function CardList() {
  const CardComponent = robot.map((user, i) => {
    return (
      <Card
        key={i}
        id={robot[i].id}
        name={robot[i].name}
        email={robot[i].email}
      />
    );
  });
  return (
    <div>
      <div className="grid grid-cols-4 gap-1 justify-items-center">
        {CardComponent}
      </div>
    </div>
  );
}

export default CardList;
