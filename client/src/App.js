import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      auth: false,
      user: null
    }
  }

  render () {
   return (
     <Router>
       <div className='App'>
         <Header />
         <div className='container'>
           <Route exact path='/' component={Home} />
         </div>
         <Footer />
       </div>
     </Router>
   )
  }
}

export default App
