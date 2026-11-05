import Countdown from './Countdown'

import styles from './App.module.css'



function App() {

  return (
    <>
      <h1>Willkommen</h1>

      <div className={styles.cardcontainer}>

        <Countdown title="susi" text="super susi" image="https://picsum.photos/200/300" />


      </div>

    </>
  )
}

export default App