import { useState } from "react"
import SurvicesItem from "../SurvicesItem/SurvicesItem"

const Survices = () => {

const [survices,setSurvices] = useState([
    {
        icon: "icon-access-anywhere.svg",
        title: "Acces your files,anywhere",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
      },
      {
        icon: "icon-security.svg",
        title: "Security you can trust",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
      },
      {
        icon: "icon-collaboration.svg",
        title: "Real-time collaboration",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
      },
      {
        icon: "icon-any-file.svg",
        title: "Store any type of file",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
      },
])


  return <section className="bg-[#181e2a] pb-[150px]">
  <div className="container">
    <div className="w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-9">
        {survices.map((surv,index)=> <SurvicesItem key={index}
        icon={surv.icon}
        title={surv.title}
        desc={surv.desc}
        /> )}


    </div>
    </div>
  </section>
}

export default Survices
