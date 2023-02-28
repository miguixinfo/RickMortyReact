import React from 'react'

const Characters = ({ characters }) => {
  return (
    <div className="row">
      {
        characters.map((item, index) => {
          return (
            <div className="col">
              <div className="card mt-4 text-center" style={{ maxWidth: "200px" }}>
                <img src={item.image} alt="" />
                <div className='card-body'>
                  <h5 className='card-title'>{item.name}</h5>
                  <hr />
                  <p>species: {item.species}</p>
                  <p>localizacion: {item.location.name}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Characters