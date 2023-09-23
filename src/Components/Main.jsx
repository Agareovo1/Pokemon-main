import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  useEffect(() => {
    const pokefun = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    };

const getPokemon = async (res) => {
  const pokemonArray = []; // Temporary array to collect results
  for (const item of res) {
    const result = await axios.get(item.url);
    pokemonArray.push(result.data); // Add each result to the temporary array
  }
  setPokeData((state) => {
    const combinedArray = [...state, ...pokemonArray]; // Combine the existing state with the collected results
    combinedArray.sort((a, b) => (a.id > b.id ? 1 : -1));
    return combinedArray;
  });
};




    pokefun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card pokemon={pokeData} loading={loading} infopokemon={(poke) => setPokeDex(poke)} />
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}
            <button
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
};

export default Main;
