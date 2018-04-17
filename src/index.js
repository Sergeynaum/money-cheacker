import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import MainContainer from './components/presentational/MainContainer/MainContainer'
import HeaderRow from './components/presentational/HeaderRow/HeaderRow'
import ManagePanel from './components/presentational/ManagePanel/ManagePanel'
import store from './redux/storeConfig/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

class App extends Component {
  render () {
    return (
      <Provider>
        <div className="container">
          <HeaderRow />
          <ManagePanel />
          <MainContainer />
        </div>
      </Provider>
    )
  }
}

export default App

ReactDOM.render(<App />, document.getElementById('app'));