import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
      <div class="jumbotron">
        <h1 class="display-4">Welcome to Auth System!</h1>
        <p class="lead">This is an Barney's incredible auth system</p>
        <hr class="my-4"/>
        <p>Click the login button.</p>
        <p class="lead">
          <Link class="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Home