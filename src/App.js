import React from 'react'
import axios from 'axios'
import Routes from './Routes'

const getInitialState = () => ({ loading: true, items: [] })

const API_ROUTE = 'http://localhost:1337/api'

class App extends React.Component {
  constructor() {
    super()
    this.state = getInitialState()
  }

  async fetchItems() {
    const { data } = await axios.get(API_ROUTE + '/items')
    return data
  }
  async fetchData() {
    try {
      const items = await this.fetchItems()
      this.setState({ items })
    } catch (e) {
    } finally {
      this.setState({ loading: false })
    }
  }
  componentDidMount() {
    this.fetchData()
  }
  renderLoading() {
    return <div>loading...</div>
  }
  renderError() {
    return <div>something went wrong.</div>
  }

  renderApp() {
    return <Routes {...this.state} />
  }

  render() {
    if (this.state.loading) return this.renderLoading()
    if (this.state.error) return this.renderError()
    return this.renderApp()
  }
}

export default App
