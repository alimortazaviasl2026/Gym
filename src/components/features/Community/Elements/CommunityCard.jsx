import React from 'react'

function CommunityCard({title , text}) {
  return (
    <div className=' community_card  p-3  rounded-3 text-light bg-dark '>
        <h5 className='my-3 text-center fw-bold '><span style={{color:'var(--orangeNormal)'}}>{title.word1}</span><span>{title.word2}</span></h5>
        <p className='lh-lg '>{text}</p>
    </div>
  )
}

export default CommunityCard
