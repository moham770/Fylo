import landing from '/images/illustration-intro.png'
import curve from '/images/bg-curvy-desktop.svg'

const Landing = () => {
  return <section className="pt-[200px] ">
    <div className="container">
    <div className="imgsec w-full md:w-[750px] mx-auto">
        <img className='w-full' src={landing} alt="" />
    </div>
    <div className="text-white  text-center">
        <h1 className='text-[20px] md:text-[40px]'>All your files in one secure location,<br/>
  accessible anywhere.</h1>
<p className='my-[20px] mx-auto  md:w-[500px] w-[280px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam nulla impedit commodi.</p>
<div className="btn-main  mx-auto cursor-pointer">Get Started</div>
    </div>
    </div>


    <div className="w-full h-[200px] object-cover">
      <img src={curve} className='w-full h-full
      ' alt="curve" />
    </div>
  </section>
}

export default Landing
