
import Image from 'next/image';
 import {Header} from "../components/Header";
import {Meta} from "../components/Meta";
 import {Sidebar} from "../components/Sidebar";
 import {Slot_1} from "../components/Slot_1";
 import {Slot_2} from "../components/Slot_2";
 import {Slot_3} from "../components/Slot_3";
 import {Slot_4} from "../components/Slot_4";
 import {Slot_5} from "../components/Slot_5";
 import {Maps} from "../components/Maps";

export default function Home() {
 
return(
  <>
    <Meta title="GEMS Modern Academy Dubai - Index-Page" />
    <div className="main_wrapper">
          {/* Header Start   */}
        <div className="header_wrapper">
          <Header />
        </div>
           {/* Header End   */}

         {/* Main Content Start   */}
        <div className="main_content">
             <Sidebar />
            <div className='other-content'>
            <Slot_1 />
            <Slot_2 />
            <Slot_3 />
            <Slot_4 />
            <Slot_5 />
            {/* <Maps /> */}
            </div>

        </div>
            {/* Main Content End  */}
          
         {/* Footer Start  */}
        <div className="footer_wrapper">
            <footer>
                 
            </footer>
        </div> 
          {/* Footer End  */}
    </div>
  </>
)


}


