
import Image from 'next/image';
 import {Header} from "../components/Header";
import {Meta} from "../components/Meta";
 import {Sidebar} from "../components/Sidebar";
 import {Slot_1} from "../components/Slot_1";
 import {Slot_2} from "../components/Slot_2";

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


