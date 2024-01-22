import { useState, useEffect } from "react"
import Badge from "../components/Badge"

function Vans() {

  const [vans, setVans] = useState([])

  useEffect(() => {
    fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
  }, [])

  return (
    <div className="vans--container">
        <h2>Explore our van options 🚙</h2>
        <div className="vans--filters"></div>
        <div className="vans--cards">
            {vans.map( van => (
                <div key={van.id} className="van--card">
                    <img className="van--image" src={van.imageUrl} alt={van.description} />
                    <div className="van--info">
                        <h4 className="van--name">{van.name}</h4>
                        <p className="van--price">
                            ${van.price}
                        </p>
                    </div>
                    <span>/day</span>
                    <i className="van--type">
                        <Badge text={van.type} />
                    </i>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Vans