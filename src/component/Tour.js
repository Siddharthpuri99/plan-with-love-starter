import React from 'react'
import Card from './Card'

function Tour({tours,removetour}) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with Sid</h2>
      </div>
      <div className='cards'>
      {

        tours.map((tour)=>{
            return <Card key={tour.id} {...tour} removetour={removetour}></Card>
        })
      }
      </div>
    </div>
  )
}

export default Tour
