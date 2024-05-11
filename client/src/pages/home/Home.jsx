import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import { useState } from "react"
import "./home.scss"

const Home = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <div className="home">
      <Share/>
      <Posts userId={currentUser.id}/>
    </div>
  )
}

export default Home