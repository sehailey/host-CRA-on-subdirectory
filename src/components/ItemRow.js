import React from 'react'
import { withRouter } from 'react-router-dom'
const IMAGE_PATH = '/assets/images/'

const ItemRow = props => {
  const { item } = props
  return (
    <div
      className="border border-primary bg-dark text-light p-2"
      onClick={() => props.history.push(`/items/${item.id}`, item)}
    >
      <img
        style={{ height: '100px' }}
        src={IMAGE_PATH + item.name + '.jpg'}
        alt="item"
      />
      <div>{item.name}</div>
    </div>
  )
}

export default withRouter(ItemRow)
