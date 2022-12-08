import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Stay at our top unique properties</h1>
      </div>
    </div>
  )
}

export default Home