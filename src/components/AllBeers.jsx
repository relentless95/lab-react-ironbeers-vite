import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AllBeers() {
  const [typedBeer, setTypedBeer] = useState("")
  const [beers, setBeers] = useState([]);
  const [loadingSearchedBeers, setLoadingSearchedBeers] = useState(true);



  useEffect(() => {
    if (typedBeer !== '') {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${typedBeer}`)
        .then(response => {
          setBeers(response.data)
          setLoadingSearchedBeers(false)
        }
          )
        .catch(error => console.log(error));
    }
  }, [typedBeer]);


  return (
    <div>
      <label>
        BeerSearch
        <input type='text' value={typedBeer} onChange={event => setTypedBeer(event.target.value)} />
      </label>
      All Beers
      {!loadingSearchedBeers&&<>{beers.map((beer) => {
        return (
          <div>
            <div style={{  height: '100px' }}>
              <img style={{  height: '100px' }} src={beer.image_url} alt="beeeeer" />
            </div>
            <div>
              <Link to={`${beer._id}`}>{beer.name}</Link>
            </div>
            <div>{beer.tagline}</div>
            <div>Created by:{beer.contributed_by}</div>
            <hr/>
          </div>
        );
      })}</>}
    </div>
  );
}
