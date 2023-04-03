import Footer from "./Footer"
import Header from "./Header"
import "./home.css"
import { useLocation } from "react-router-dom"

export default function Home() {

  const location = useLocation();

  return (
    <div>
      {/* Add Navbar Component Here */}
      <Header token={location.state.token} />
      <Footer />
    </div>
  )
}
