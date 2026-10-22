import { useState } from 'react'
import Card from './Card'
import styles from './App.module.css'


function App() {

  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default App
