const TestimonialItem = ({desc,image,name,position}) => {

  return <div className="p-[25px] rounded-lg shadow-[8px_8px_10px_8px_#1c202c] bg-[#21293c] text-white">
    <p className="tracking-[0.8px] mb-3 text-sm">{desc}</p> 
    <div className="flex gap-3">

    <img className="w-[50px] h-[50px] rounded-full object-contain" src={`./images/${image}`} alt="clientPhoto" />
   <div>
   <strong className="d-block">{name}</strong>
    <p className="font-normal">{position}</p>
   </div>
  
    </div>
  
  
  
  </div>
}

export default TestimonialItem
