import React from 'react'
const IMAGE_PATH = '/assets/images/'

class ItemDetail extends React.Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
    this.setState({ ...this.props.history.location.state, loading: false })
  }
  render() {
    return (
      <div className="container m-5 p-5">
        <h1>ITEM DETAIL!</h1>
        <h5>I am {this.state.name}.</h5>
        <img
          style={{ height: '400px' }}
          src={IMAGE_PATH + this.state.name + '.jpg'}
          alt="item"
        />
      </div>
    )
  }
}

export default ItemDetail
