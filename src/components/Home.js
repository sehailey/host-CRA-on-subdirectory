import React from 'react'
import { Link } from 'react-router-dom'
const Home = props => {
  return (
    <div className="container m-5 p-5">
      <h1>HELLO WORLD!</h1>
      There are <Link to="/items">{props.items.length} items</Link> on the
      state.
    </div>
  )
}

export default Home
