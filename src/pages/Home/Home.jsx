import "./Home.scss"

import Navbar from "../../components/ForHome/Navbar/Navbar"
import Hero from "../../components/ForHome/Hero/Hero"

const Home = () => {
  return (
    <div className="home-hero">
          <Navbar />
          <Hero />
    </div>
  )
}

export default Home