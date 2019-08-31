import React from 'react'
const IMAGE_PATH = '/assets/images/'

const NotFound = props => {
  return (
    <div className="container p-5">
      <img
        style={{ height: '400px' }}
        src={IMAGE_PATH + '404.jpeg'}
        alt="item"
      />
    </div>
  )
}

export default NotFound
