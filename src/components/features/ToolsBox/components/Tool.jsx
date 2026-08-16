import React from 'react'

function Tool({id , tool , img}) {
  return (
    <div>
       <img src={img} width='100%' alt={tool} />
    </div>
  )
}

export default Tool
