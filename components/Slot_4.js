import Image from "next/image";
import pencil from "../public/images/icons8-pencil.svg";
import plus from "../public/images/icons8-plus_math.svg";
import trash from "../public/images/icons8-trash.svg";
import bluerocket from "../public/images/icons8-rocket2.svg";
import CourseData from "./CourseData";

const Slot_4 = () => {
  console.log(CourseData);

  return (
    <>
      <div className="slot-4">
        <table>
          <thead>
            <tr>
              <th className="active">Name</th>
              <th>Department</th>
              <th>Program</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {CourseData.map((currelm, index) => {
              return (
                <>
                  <tr>
                    <td> {currelm.name}</td>
                    <td>{currelm.department} </td>
                    <td> {currelm.program}</td>
                    <td>
                      <div className="btn-block">
                        <BtnActions
                          imgsrc={pencil}
                          alt="iconfor_action-1"
                          link={currelm.btn_1Link}
                        />
                        <BtnActions
                          imgsrc={plus}
                          alt="iconfor_action-2"
                          link={currelm.btn_2Link}
                        />
                        <BtnActions
                          imgsrc={trash}
                          alt="iconfor_action-3"
                          link={currelm.btn_3Link}
                        />
                        <BtnActions
                          imgsrc={bluerocket}
                          alt="iconfor_action-4"
                          link={currelm.btn_4Link}
                        />
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};



const BtnActions = (props) => {
  return (
    <>
      <button className="btn-tool" data-link={props.link}>
        <div className="btn-logo_1">
          <div className="image-container">
            <Image
              src={props.imgsrc}
              alt={props.alt}
              layout="fill"
              className="image"
              quality={100}
            />
          </div>
        </div>
      </button>
    </>
  );
};

export { Slot_4, BtnActions };
