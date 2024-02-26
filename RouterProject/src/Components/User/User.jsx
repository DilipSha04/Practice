import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div className='bg-orange-400'>
      <span className='font-semibold '>User :{userId}</span>
    </div>
  )
}

export default User
