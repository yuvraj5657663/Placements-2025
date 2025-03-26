import html from "../assets/html.png"
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import oracle from "../assets/oracle.png";
import spring from "../assets/spring.png";
import springboot from "../assets/springBoot.jpg"



function Experiance() {
    const cardItem = [
       
        {
            id : 1,
            logo:html,
            name:"html"
        },
        {
            id : 2,
            logo:css,
            name:"css"
        },
        {
            id : 3,
            logo:java,
            name:"java"
        },
        {
            id : 4,
            logo:javascript,
            name:"javascript"
        },
        {
            id: 5,
            logo:oracle,
            name:"oracle"
        },
        {
            id: 6,
            logo:spring,
            name:"spring"
        },
        {
            id: 7,
            logo:springboot,
            name:"springBoot"
        }
       
        
        
        
    ]
  return (
    <div
      name="Experiance"
      className="container px-4 mx-auto my-16 mt-10 max-w-screen-2xl md:px-20"
    >
      <div>
        <h1 className="mb-5 text-3xl font-bold">Experiance</h1>
        <p>i've more than 2 years of experience in below technologies.</p>
        <div className="grid grid-cols-2 my-3 gap-7 md:grid-cols-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-4 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
