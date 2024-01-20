import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
        <h2 className="nav--title">#VANLIFE</h2>
        <div className="nav--links">
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </nav>
  )
}

export default NavBar