import html from "../assets/html.png"
import mongo from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.webp";
import java from "../assets/java.png";



function Portfolio() {
    const cardItem = [
       
        {
            id : 1,
            logo: mongo,
            name:"MongoDB"
        },
        {
            id : 2,
            logo: express,
            name:"Express"
        },
        {
            id : 3,
            logo: reactjs,
            name:"Reactjs"
        },
        {
            id : 4,
            logo: nodejs,
            name:"NodeJS"
        },
        {
            id: 5,
            logo: python,
            name:"python"
        },
        {
            id: 6,
            logo: java,
            name:"Java"
        },
        {
            id: 7,
            logo:html,
            name:"html"
        }
        
        
        
    ]
  return (
    <div
      name="Portfolio"
      className="container px-4 mx-auto mt-10 max-w-screen-2xl md:px-20"
    >
      <div>
        <h1 className="mb-5 text-3xl font-bold">Portfolio</h1>
        <span className="underline font-semi-bold">featured Projects</span>
        <div className="grid grid-cols-1 gap-3 my-5 md:grid-cols-4">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="mb-2 text-xl font-bold">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sunt, ad?
                </p>
              </div>
              <div className="px-6 py-4 space-x-4 justipfy-around">
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-yellow-700">
                  video
                </button>
                <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-red-700">
                  sorce code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
