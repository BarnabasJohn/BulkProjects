import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { reset_password_confirm } from '../actions/auth'

const ResetPasswordConfirm = ( { reset_password_confirm } ) => {
  const params = useParams()

  const [ requestSent, setRequestSent ] = useState(false)

  const [ formData, setFormData ] = useState({
    new_password: '',
    re_new_password: '',
  })

  const { new_password, re_new_password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const onSubmit = e => {
    e.preventDefault()

    const uid = params.uid
    const token = params.token

    reset_password_confirm( uid, token, new_password, re_new_password )
    setRequestSent(true)
  }

  if (requestSent) {
    return <Navigate to='/' />
  }

  return (
    <div className='container mt-5'>
      <h1>Password Reset Confirm</h1>
      <form onSubmit={e => onSubmit(e) }>
        <div className='form-group'>
          <input 
            className='form-control mt-3'
            type='password'
            placeholder='New Password'
            name='new_password'
            value={new_password}
            onChange={ e => onChange(e)}
            required
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <input 
            className='form-control mt-3'
            type='password'
            placeholder='Confirm New Password'
            name='re_new_password'
            value={re_new_password}
            onChange={ e => onChange(e)}
            required
            minLength='8' 
          />
        </div>
        <button className='btn btn-primary  mt-3' type='submit'>Confirm Password Reset </button>
      </form>
    </div>
  )
}

export default connect(null, { reset_password_confirm } )(ResetPasswordConfirm);
