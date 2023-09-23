import React from "react";

const Pokeinfo = ({ data }) => {
  if (!data) {
    return null; // Handle the case when data is undefined or null
  }

  return (
    <>
      <h1>{data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt=""
      />

      <div className="abilities">
        {data.abilities.map((poke) => (
          <div className="group" key={poke.ability.name}>
            <h2>{poke.ability.name}</h2>
          </div>
        ))}
      </div>

      <div className="base-stat">
        {data.stats.map((poke) => (
          <h3 key={poke.stat.name}>
            {poke.stat.name}: {poke.base_stat}
          </h3>
        ))}
      </div>
    </>
  );
};

export default Pokeinfo;
