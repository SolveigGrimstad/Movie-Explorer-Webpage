import React from 'react'
import '../src/styling/App.css'
import Header from './components/header'
import Footer from './components/footer'
import Searchbar from './components/searchbar'
import Content from './components/content'
import '../src/styling/materialize.css'
import '../src/styling/materialize.min.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <Content/>
      <Footer/>
    
    </div>
  );
}

export default App;
