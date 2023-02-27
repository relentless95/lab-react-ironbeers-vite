import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import AllBeers from './components/AllBeers'
import axios from 'axios'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Header from './components/Header'
import OneBeer from './components/OneBeer'

function App() {
  const [beersArr, setBeersArr] = useState([])
  const [loading, setLoading] = useState(true);


  const getAllBeers = () => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then(response => {
        setBeersArr(response.data) 
        // console.log(response.data) 
        setLoading(false);
      })
      .catch(error => console.log(error))
  }


  useEffect(() => {
    getAllBeers()
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/beers' element={<AllBeers beersArr={beersArr}/>} />
        <Route path='/random-beer' element={<RandomBeer/>} />
        <Route path='/new-beer' element={<NewBeer/>} />
        <Route path='/beers/:id' element={<OneBeer/>} />
      </Routes>
    </div>
  )
}

export default App
