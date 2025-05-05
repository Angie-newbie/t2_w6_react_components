
import './App.css'

import {Header} from './components/Header'
import {Footer} from "./components/Footer"
import {PageContent} from "./components/PageContent"

function App() {

  return(
    <>

    <Header />

    <PageContent targetContent="hom" theme = "dark" />

    <Footer />


      {/* <header>

      </header>

      <main>

      </main>

      <footer>

      </footer> */}
    </>
  )
}

export default App
