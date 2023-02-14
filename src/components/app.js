import { Router } from 'preact-router'

import Processartificial from '../routes/processartificial/index'
import Page from '../routes/page/index'
import OmemoryV2 from '../routes/omemory-v2/index'
import Projectwannabe from '../routes/projectwannabe/index'
import Neonworld from '../routes/neonworld/index'
import Index from '../routes/index/index'
import Omemory from '../routes/omemory/index'
import Smeet from '../routes/smeet/index'
import Dualinferno from '../routes/dualinferno/index'
import '../global-style.module.css'

const App = () => {
  return (
    <Router>
      <Processartificial path="/processartificial" />
      <Page path="/page" />
      <OmemoryV2 path="/omemory-v2" />
      <Projectwannabe path="/projectwannabe" />
      <Neonworld path="/neonworld" />
      <Index path="/" />
      <Omemory path="/omemory" />
      <Smeet path="/smeet" />
      <Dualinferno path="/dualinferno" />
    </Router>
  )
}

export default App
