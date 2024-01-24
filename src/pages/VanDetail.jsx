import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Badge from '../components/Badge'
import Button from '../components/Button'

function VanDetail() {
  const { id } = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    fetch(`/api/vans/${id}`)
        .then(res => res.json())
        .then(data => setVan(data.vans))
  }, [id])

  return (
    <div className='vanDetail--container'>
        {van ? (
            <div className="vanDetail">
                <img src={van.imageUrl} alt={van.name} />
                <i className="van--type">
                <Badge text={van.type} />
                </i>
                <h2>{van.name}</h2>
                <div className="vanDetail--info">
                    <p className="vanDetail--price">
                        ${van.price}<span>/day</span>
                    </p>
                </div>
                <p className='vanDetail--des'>{van.description}</p>
                <Button className={'button orange'} >
                    Rent this van
                </Button>
            </div>
        ) : <h2>Loading...</h2>
        }
    </div>
  )
}

export default VanDetail