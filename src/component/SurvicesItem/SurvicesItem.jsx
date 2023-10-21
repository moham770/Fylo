
export default function SurvicesItem({ icon, title, desc }) {

    
    console.log(icon)
    return (
        <div className="text-white text-center my-2">
          <img className="mx-auto" src={`../../../src/assets/images/${icon}`} alt="img-alt" />
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-sm font-normal">{desc}</p>
        </div>
      );
}

