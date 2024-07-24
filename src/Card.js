import React from "react";

function Card(props) {
  const { name, email, id } = props;
  return (
    <div className="text-center  bg-green-400 p-3 rounded-lg">
      <img
        className="w-40 h-40"
        alt="images"
        src={`https://robohash.org/${id}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
