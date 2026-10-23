
import Card from './Card'
import Header from './Header'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <div className="Card-container">
        <Card title="Susi" text="Made by Neval" image="https://picsum.photos/200/300" />
        <Card title="Peter" text="Das ist Peter" image="https://picsum.photos/201/300" />
        <Card title="Paul" text="Super Paul" image="https://picsum.photos/202/300" />
        <Card title="Anna" text="Hallo Anna" image="https://picsum.photos/203/300" />
        <Card title="Max" text="Hallo Max" image="https://picsum.photos/204/300" />
      </div>

      <Footer />
    </>
  )
}

export default App