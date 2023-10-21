import React from 'react'

const Stayproductive = () => {
  return <section className='bg-[#181e2a] pb-[150px]'>
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-4 place-items-center">
        <div className="StayproductiveImg">
            <img src="/images/illustration-stay-productive.png" alt="Stayproductive" />
        </div>
        <div className=" text-white text-4xl   font-semibold">
            <h2 className='mb-3 leading-10'>Stay productive,<br/>
wherever you are</h2>
<p className='text-sm font-normal mb-3 tracking-[0.8px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi incidunt quo deserunt quidem accusamus iure ab earum reprehenderit debitis!</p>
<p className='text-sm font-normal mb-3 tracking-[0.8px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore excepturi incidunt quo deserunt quidem accusamus iure ab earum reprehenderit debitis!</p>
      
<a href="/" className=' text-sm font-normal mb-3 border-b-2 pb-1  flex w-fit text-primary border-primary hover:text-[#42b0d1] hover:border-[#42b0d1] transition-colors duration-200' >
See how Fylo works
<img src="/images/icon-arrow.svg" className='w-[20px] h-[20px] ml-1 object-cover animate-movingRight' alt="" />
</a>

        </div>

        
    </div>
  </div>
  </section>
}

export default Stayproductive
