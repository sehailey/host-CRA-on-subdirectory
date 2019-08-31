import React from 'react'
import { withRouter } from 'react-router-dom'

const ItemRow = props => {
  const { item } = props
  return (
    <div
      className="border border-primary bg-dark text-light p-5"
      onClick={() => props.history.push(`/items/${item.id}`, item)}
    >
      {item.name}
    </div>
  )
}

export default withRouter(ItemRow)
