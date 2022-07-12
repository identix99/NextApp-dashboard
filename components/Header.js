import Image from "next/image";
import logo from "../public/images/Combined Shape2.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="part-1">
          <div className="header_logo">
            <Image src={logo} width="216" height="47" alt="header logo" />
          </div>
          <div className="header_txt">
            <h2 className="header_qut">GEMS Modern Academy Dubai</h2>
          </div>
          <div className="message-info">
            <div className="message-info-box">
              <div className="message_num">16</div>
            </div>
          </div>
        </div>
        <div className="part-2">
          <p className="drop_head">Edutech - Teacher</p>
          <select className="select-block">
            <option value="2021-2022">2021-2022</option>
            <option value="2020-2021">2020-2021</option>
            <option value="2019-2020">2019-2020</option>
            <option value="2018-2019">2018-2019</option>
            <option value="2017-2018">2017-2018</option>
          </select>
        </div>
      </header>
    </>
  );
};

export { Header };
