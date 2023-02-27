import React,{ useState, useEffect } from 'react';
import axios from 'axios';


export default function RandomBeer() {
  const [loadingRandom, setLoadingRandom] = useState(true);
  const [randomBeer, setRandomBeer] = useState(null);
  

  const getRandomBeers = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setRandomBeer(response.data);
        setLoadingRandom(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRandomBeers();
  }, []);

  if (loadingRandom) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div style={{ height: '100px' }}>
      <img style={{ height: '100px' }} src={randomBeer.image_url} alt="beeeeer" />
    </div>
    <div>{randomBeer.name}</div>
    <div>{randomBeer.tagline}</div>
    <div>{randomBeer.first_brewed}</div>
    <div>{randomBeer.attenuation_level}</div>
    <div>{randomBeer.description}</div>
    <div>Created by:{randomBeer.contributed_by}</div>
  </>
  )
}
