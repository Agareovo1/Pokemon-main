import React from "react";

const Card = ({ pokemon, loading, infopokemon }) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        pokemon.map((item) => (
          <div className="card" key={item.id} onClick={() => infopokemon(item)}>
            <h2>{item.id}</h2>
            <img src={item.sprites.front_default} alt="" />
            <h2>{item.name}</h2> {/* Updated line */}
          </div>
        ))
      )}
    </>
  );
};

export default Card;
