import { useState } from 'react'
import Card from './Card'
import styles from './App.module.css'


function App() {

  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>
        <Card title="peter" text="Das ist Peter" image="https://picsum.photos/200/300" />
        <Card title="susi" text="super susi" image="https://picsum.photos/200/300" />
        <Card title="paul" text="super paul" image="https://picsum.photos/200/300" />
      </div>

    </>
  )
}

export default App
