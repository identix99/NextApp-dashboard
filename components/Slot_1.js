import hometool from "../public/images/Shape.svg";
import Image from "next/image";
import add from "../public/images/icons8-add.svg";
 
const Slot_1 = () => {


  
 const menunove = ()=>{
  const  menu = document.querySelector(".sidebar");
  const  othercontent = document.querySelector(".other-content");
  menu.classList.toggle("sidebar_move");
  othercontent.classList.toggle("othercontent_width");
    
 }


  return (
    <>
      <div className="slot-1">
        <div className="left_tools">
          <button className="home_tool" onClick={menunove}>
            <div className="image-container">
              <Image
                src={hometool}
                alt="header logo"
                layout="fill"
                className="image"
                quality={100}
              />
            </div>
          </button>
          <p className="home_tool-text">Courses</p>
        </div>
        <div className="righttools">
          <button className="couse_btn">
            
            <div className="navicon">
              <div className="image-container">
                <Image
                  src={ add }
                  alt="header logo"
                  layout="fill"
                  className="image"
                  quality={100}
                />
              </div>
            </div> 
           <span className="text-course-btn"> New Course</span>
          </button>
        </div>
      </div>
    </>
  );
};
export { Slot_1 };
