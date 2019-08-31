import React from 'react'
import ItemRow from './ItemRow'

const Items = props => {
  return (
    <div>
      {props.items.map(i => (
        <ItemRow key={i.id} item={i} />
      ))}
    </div>
  )
}

export default Items
