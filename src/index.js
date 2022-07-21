import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import NeonWorld from './views/neon-world'
import Home from './views/home'
import NoMemory from './views/no-memory'
import DualInferno from './views/dual-inferno'
import ProcessArtificial from './views/process-artificial'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={NeonWorld} path="/neon-world" />
        <Route exact component={Home} path="/" />
        <Route exact component={NoMemory} path="/no-memory" />
        <Route exact component={DualInferno} path="/dual-inferno" />
        <Route exact component={ProcessArtificial} path="/process-artificial" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
