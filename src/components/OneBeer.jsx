import React,{ useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';

export default function OneBeer() {
  const [loadingOne, setLoadingOne] = useState(true);
  const [oneBeer, setOneBeer] = useState(null);
  let { id } = useParams();

  const getOneBeers = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setOneBeer(response.data);
        setLoadingOne(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOneBeers();
  }, []);

  if (loadingOne) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{ height: '100px' }}>
        <img style={{ height: '100px' }} src={oneBeer.image_url} alt="beeeeer" />
      </div>
      <div>{oneBeer.name}</div>
      <div>{oneBeer.tagline}</div>
      <div>{oneBeer.first_brewed}</div>
      <div>{oneBeer.attenuation_level}</div>
      <div>{oneBeer.description}</div>
      <div>Created by:{oneBeer.contributed_by}</div>
    </>
  );
}
