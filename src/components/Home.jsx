import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <div>
        <Link to={'/beers'}>All Beers</Link>
        <Link to={'/random-beer'}>Random Beers</Link>
        <Link to={'/new-beer'}>New Beers</Link>
    </div>
  )
}
