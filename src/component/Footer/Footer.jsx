import logo from '../../../public/images/logo.svg'

const Footer = () => {
  return (
    <section className='bg-[#0c1524] pt-[250px] md:pt-[200px] pb-[100px] px-[20px]'>
        <div className="container mx-auto">
            <img src={logo} alt="" />
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  my-9 gap-[30px] ">

        
        
    <div className="flex  ">
    <i className="fa-solid fa-location-dot mr-2"></i>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad fuga.</p>
    </div>


    <div  className='lg:mx-auto'>
        <div className="flex mb-2">
    <i className="fa-solid fa-phone-volume mr-2"></i>
    <p>+20121212121</p>
        </div>
        <div className="flex">
    <i className="fa-solid fa-envelope mr-2"></i>
    <p>example@fylo.com</p>
        </div>
    </div>
   
        <ul className='grid grid-cols-1 md:grid-cols-2 leading-10 tracking-[0.8px] gap-x-7 lg:mx-auto'> 
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>About Us</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Contact Us</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Jobs</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Terms</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Press</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Privacy</li>
            <li className='cursor-pointer hover:text-primary transition-colors duration-200'>Blog</li>
        </ul>


    <div className=" flex lg:mx-auto">
        <div className="face element-center mr-3  border-white border-[1px] rounded-full hover:text-primary cursor-pointer w-[40px] h-[40px] "><i className='fab fa-facebook'></i></div>
        <div className="twiter element-center mr-3  border-white border-[1px] rounded-full hover:text-primary cursor-pointer w-[40px] h-[40px] "><i className='fab fa-twitter'></i></div>
        <div className="insta element-center  mr-3 border-white border-[1px] rounded-full hover:text-primary cursor-pointer w-[40px] h-[40px] "><i className='fab fa-instagram'></i></div>



    </div>



    </div>
    </div>
    </section>
  )
}

export default Footer
