import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { verify } from '../actions/auth'

const Activate = ( { verify } ) => {

  const params = useParams()

  const [verified, setVerified ] = useState(false)

  const verify_account = e => {
    const uid = params.uid

    const token = params.token

    verify( uid, token )
    setVerified(true)
  }

  if (verified) {
    return <Navigate to='/' />
  }

  return (
    <div className='container mt-5'>
      <div className='d-flex flex-column justify-content-center align-items-center'
        style={{ marginTop: '200px' }}>
          <h1>Verify your Account</h1>
          <button onClick={verify_account}
            style={{ marginTop: '50px' }} type='button'
            className='btn btn-primary'
            >Verify</button>
      </div>
    </div>
  )
}

export default connect(null, { verify }  )(Activate);
