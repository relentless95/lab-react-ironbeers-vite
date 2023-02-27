import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function NewBeer() {
const [name , setName] = useState("")
const [tagline  , setTagline ] = useState("")
const [description   , setDescription  ] = useState("")
const [firstBrewed  , setFirstBrewed ] = useState("")
const [brewersTips  , setBrewersTips ] = useState("")
const [attenuationLevel  , setAttenuationLevel ] = useState(null)
const [contributedBy  , setContributedBy ] = useState("")
const [response, setResponse ] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    const createdNewBeer = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy }

    try {
      const res = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", createdNewBeer);
      setResponse(res.data);
      console.log(response)
    } catch (err) {
      console.log(err);
    }
    setName("")
    setTagline("")
    setDescription("")
    setFirstBrewed("")
    setBrewersTips("")
    setAttenuationLevel(null)
    setContributedBy("")
  }

  return (
    <>
    <h2>New Apartment</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <label>
        Name
        <input type='text' value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Tagline
        <input type='text' value={tagline} onChange={event => setTagline(event.target.value)} />
      </label>
      <label>
        Description
        <input type='text' value={description} onChange={event => setDescription(event.target.value)} />
      </label>
      <label>
        First Brewed
        <input type='text' value={firstBrewed} onChange={event => setFirstBrewed(event.target.value)} />
      </label>
      <label>
        Brewers Tips
        <input type='text' value={brewersTips} onChange={event => setBrewersTips(event.target.value)} />
      </label>
      <label>
        Attenuation-Level
        <input
          type='number'
          value={attenuationLevel}
          onChange={event => setAttenuationLevel(event.target.value)}
          // step='10'
        />
             <label>
        Contributed By
        <input type='text' value={contributedBy} onChange={event => setContributedBy(event.target.value)} />
      </label>
      </label>

      <button type='submit'>Create</button>
    </form>
  </>
  )
}
