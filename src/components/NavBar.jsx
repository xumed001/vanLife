import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header>
      <nav>
          <h2 className="nav--title">
          <Link to={'/'}>#VANLIFE</Link>
          </h2>
          <div className="nav--links">
              <Link to={'/about'}>About</Link>
          </div>
      </nav>
    </header>
  )
}

export default NavBar