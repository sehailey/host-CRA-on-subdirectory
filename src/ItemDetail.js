import React from 'react'

class ItemDetail extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.setState({ ...this.props.history.location.state })
  }
  render() {
    return (
      <div className="container m-5 p-5">
        <h1>ITEM DETAIL!</h1>
        <h5>I am {this.state.name}.</h5>
      </div>
    )
  }
}

export default ItemDetail
