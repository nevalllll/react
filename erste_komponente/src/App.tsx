import { useState } from 'react'
import './App.css'
import Card from './Card'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className="Card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </>
  )
}

export default App
