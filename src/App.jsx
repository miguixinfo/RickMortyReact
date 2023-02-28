import React, { useEffect, useState } from 'react';
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import { Pagination } from './components/Pagination';

const initialurl = 'https://rickandmortyapi.com/api/character';

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };
  useEffect(() => {
    fetchCharacters(initialurl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      </div>

    </>
  );
}

export default App;
