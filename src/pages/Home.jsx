import { Link } from "react-router-dom"
import Button from "../components/Button"

function Home() {
  return (
    <div className="home">
        <div className="home--content">
            <h1 className="home--title">You got the travel plans, we got the travel vans.</h1>
            <p className="home--text">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to={"/vans"}>
              <Button className={'button orange'} >
                Find your van
              </Button>
            </Link>
        </div>
    </div>
  )
}

export default Home