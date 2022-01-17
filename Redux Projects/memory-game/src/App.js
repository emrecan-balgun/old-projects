import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const url = "https://cdn.traction.one/pokedex/pokemon";

  const [openedCard, setOpenCard] = useState([]);
  const [matched, setMatched] = useState([]);
  // const [score, setScore] = useState(0);

  const pokemons = [
    { id: 1, name: 'bulbasaur'},
    { id: 2, name: 'ivysaur'},
    { id: 3, name: 'venusaur'},
    { id: 4, name: 'charmander'},
    { id: 5, name: 'charmeleon'},
    { id: 6, name: 'charizard'},
    { id: 7, name: 'squirtle'},
    { id: 8, name: 'wartortle'},
    { id: 9, name: 'blastoise'},
    { id: 10, name: 'caterpie'},
    { id: 11, name: 'metapod'},
    { id: 12, name: 'butterfree'},
    { id: 13, name: 'weddle'},
    { id: 14, name: 'kakuna'},
    { id: 15, name: 'beedrill'},
  ];

  // make a pair of each pokemons
  const pairOfPokemons = [...pokemons, ...pokemons];

  // open only that card which was matched
  useEffect(() => {
    const firstMatch = pairOfPokemons[openedCard[0]];
    const secondMatch = pairOfPokemons[openedCard[1]];

    if(secondMatch && firstMatch.id === secondMatch.id) {
      setMatched([...matched, firstMatch.id]);
    }

    if(openedCard.length === 2) {
      setTimeout(() => setOpenCard([]), 1000);
    }
  }, [openedCard])


  const handleFlip = index => {
    setOpenCard((opened) => [...opened, index]);
  }

  return (
    <div className="app">
      {/* <span className="score">Score: {score}</span> */}
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          // flip the card with flipped css class
          let flipCard;
          flipCard = false;

          // if open card has index of current card then open the card
          if(openedCard.includes(index)) {
            flipCard = true;
          }

          if(matched.includes(pokemon.id)) {
            flipCard = true;
          }

          return <div className={`pokemon-card ${flipCard ? 'flipped' : ''}`} key={index} onClick={() => handleFlip(index)}>
            <div className="inner">
              <div className="front">
                <img 
                  src={`${url}/${pokemon.id}.png`}
                  alt="pokemon" 
                  width="100"
                />
              </div>
              <div className="back">

              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
