
import './App.css'

import {Header} from './components/Header'
import {Footer} from "./components/Footer"
import {PageContent} from "./components/PageContent"
import {PageLayout} from './components/PageLayout'

function App() {

  return(
    <>

    {/* <Header /> */}
    <PageLayout>
    <PageContent targetContent="hom" theme = "dark" />

        
    </PageLayout>

    
    {/* <Footer /> */}


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
