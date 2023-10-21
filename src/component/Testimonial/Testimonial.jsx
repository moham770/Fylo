import { useState } from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-1.jpg",
        position: "Founder & CEO, Huddle",
        name: "Ahmed",
      },
      {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-2.jpg",
        position: "Founder & CEO, Huddle",
        name: "Mohamed",
      },
      {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
        image: "profile-3.jpg",
        position: "Founder & CEO, Huddle",
        name: "Eman",
      },
  ]);

  return (
    <section className="bg-[#181e2a] pb-[250px]">
      <div className="container relative ">
        <div className="qute absolute left-[-10px] top-[-35px] ">
          <img src={`src/assets/images/bg-quotes.png `} alt="" />
        </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                {testimonial.map((test)=>(
                    <TestimonialItem key={test.id} 
                    desc={test.desc}
                    image={test.image}
                    name={test.name}
                    position={test.position}
                    />
                ))}
            </div>
      </div>
    </section>
  );
};

export default Testimonial;
