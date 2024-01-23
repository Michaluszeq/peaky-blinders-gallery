import React, { useState } from 'react';
import './App.css';
import thomasImage from './images/thomas-shelby.png';
import arthurImage from './images/arthur-shelby.jpg';
import pollyImage from './images/pollyImage.jpg';
import alfieImage from './images/alfieImage.jpg';
import johnImage from './images/johnImage.jpg';
import adaImage from './images/adaImage.jpg';
import lizzieImage from './images/lizzieImage.jpg';
import michaelImage from './images/michaelImage.jpg';
import graceImage from './images/graceImage.jpg';
import finnImage from './images/finnImage.jpg';
import esmeImage from './images/esmeImage.jpg';
import logo from './images/logo.png';
import aberamaImage from './images/aberamaImage.jpg';
import lindaImage from './images/lindaImage.jpg';
import billyImage from './images/billyImage.jpg';
import lucaImage from './images/lucaImage.jpg';
import curlyImage from './images/curlyImage.jpg';


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
   {
    id: 3,
    name: 'Polly Gray',
    image: pollyImage,
    description: 'Aunt of the Shelby siblings, involved in the family business.'
  },
  {
    id: 4,
    name: 'Alfie Solomons',
    image: alfieImage,
    description: 'Jewish gang leader and business associate of the Shelby family.'
  },
  {
    id: 5,
    name: 'John Shelby',
    image: johnImage,
    description: 'Younger brother of Thomas and Arthur, involved in Shelby family business.'
  },
  {
    id: 6,
    name: 'Ada Shelby',
    image: adaImage,
    description: 'Sister of the Shelby siblings, politically active.'
  },
  
  {
    id: 7,
    name: 'Lizzie Stark',
    image: lizzieImage,
    description: 'Former prostitute, later married to Tommy Shelby.'
  },
  {
    id: 8,
    name: 'Michael Gray',
    image: michaelImage,
    description: 'Son of Polly Gray, involved in the Shelby business.'
  },
  {
    id: 9,
    name: 'Grace Burgess',
    image: graceImage,
    description: 'Undercover agent turned love interest of Thomas Shelby.'
  },
  {
    id: 10,
    name: 'Finn Shelby',
    image: finnImage,
    description: 'Youngest brother of the Shelby siblings.'
  },
  {
    id: 11,
    name: 'Esme Shelby',
    image: esmeImage,
    description: 'Widow of one of the Shelby brothers, later married to John Shelby.'
  },
   {
    id: 12,
    name: 'Aberama Gold',
    image: aberamaImage,  
    description: 'Experienced and dangerous gypsy who becomes involved with the Shelby family.'
  },
  {
    id: 13,
    name: 'Linda Shelby',
    image: lindaImage,  
    description: 'Wife of Arthur Shelby and member of the Shelby family.'
  },
  {
    id: 14,
    name: 'Billy Grade',
    image: billyImage,  
    description: 'Journalist and writer covering the Shelby family and Birmingham crime scene.'
  },
  {
    id: 15,
    name: 'Luca Changretta',
    image: lucaImage,  
    description: 'Leader of the Italian gang who poses a threat to the Shelby family.'
  },
  {
    id: 16,
    name: 'Curly',
    image: curlyImage,  
    description: 'Member of the Shelby family and a trusted ally.'
  },
   

];

function App() {
  const [flipped, setFlipped] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCharacters = charactersData.filter((character) => {
    const fullName = `${character.name} ${character.surname || ''}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      {}
      <img src={logo} alt="Peaky Blinders Logo" className="logo" />

      <div>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="gallery">
        {filteredCharacters.map((character) => (
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