import React from 'react'

const Loading = () => {
  return (
    <section className="flex flex-auto  justify-center items-center  ">
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-white pb-5'>Loading...</h1>
            <span className='loader '></span>
        </div>
    </section>
  )
}

export default Loading