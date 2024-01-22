import React, { useState } from 'react';
import './App.css';
import thomasImage from './images/thomas-shelby.png';
import arthurImage from './images/arthur-shelby.jpg';

const charactersData = [
  {
    id: 1,
    name: 'Thomas Shelby',
    image: thomasImage,
    description: 'Leader of the Shelby crime family and the Peaky Blinders.'
  },
  {
    id: 2,
    name: 'Arthur Shelby',
    image: arthurImage,
    description: 'Elder brother of Thomas Shelby, known for his violent tendencies.'
  },
];

function App() {
  const [flipped, setFlipped] = useState([]);

  const handleFlip = (id) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      const index = newFlipped.indexOf(id);

      if (index !== -1) {
        newFlipped.splice(index, 1);
      } else {
        newFlipped.push(id);
      }

      return newFlipped;
    });
  };

  return (
    <div className="app">
      <h1>Peaky Blinders Gallery</h1>
      <div className="gallery">
        {charactersData.map((character) => (
          <div
            key={character.id}
            className={`card ${flipped.includes(character.id) ? 'flipped' : ''}`}
            onClick={() => handleFlip(character.id)}
          >
            <div className="front">
              <img src={character.image} alt={character.name} />
            </div>
            <div className="back">
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
