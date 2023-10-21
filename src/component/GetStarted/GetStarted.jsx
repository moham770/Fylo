
const GetStarted = () => {
  return <section>
    <div className="container relative ">
    <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] max-w-full min-h-[275px] text-white text-center p-[30px]">
    <h3 className="text-[25px] md:tex-[35px] font-semibold mb-[15px]">Get early access today</h3>
    <p className="w-[620px] max-w-full mx-auto mb-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, tempore? Vero adipisci eveniet voluptatibus cupiditate!</p>
    <form className="w-full gap-5 flex justify-between items-center flex-wrap md:px-[60px]"> 
        <input type="email" placeholder="email@Examble.com"  className="w-full md:flex-1 pl-[30px] h-[50px] rounded-[30px] outline-none border-none text-black "/>
        <button type="submit" className=" w-[200px] h-[50px]  bg-[#42d0d1] hover:bg-[#8cdae4] rounded-[30px] transition-colors duration-200" >Get Started For Free</button>
    </form>


    </div>
    </div>
  </section>
}

export default GetStarted
