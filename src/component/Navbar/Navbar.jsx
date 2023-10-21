import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.svg'

const Navbar = () => {
    const [links,setLinks] = useState(['Features','Team','Signin'])
    
    const headerRef = useRef()

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                headerRef.current.style.backgroundColor= '#0c1524'
                headerRef.current.style.padding= '20px 0'

                console.log('more')
            }else{
                headerRef.current.style.backgroundColor= 'transparent'
                headerRef.current.style.padding= '50px 0'
                console.log('less')
            }
        })
    },[])


  return (
  <header ref={headerRef} className=' transition-all duration-200 py-[50px] z-50 fixed top-0 left-0 w-full'>
    <nav>
      <div className=" container mx-auto flex gap-[30px] sm:gap-0 flex-col sm:flex-row justify-between items-center ">
      <img src={logo} alt="" />
        <ul className='flex gap-[50px]'>
        {links.map((link)=> <li key={link}>
            <a className='text-white opacity-[0.7] hover:opacity-[1] hover:underline transition-all' href={`/${link.toLowerCase()}`}>
                {link}
            </a>
            </li>)}
        </ul>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
