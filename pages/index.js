
import Image from 'next/image'
 import {Header} from "../components/Header";
import {Meta} from "../components/Meta";


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
            <div className="container">
                
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


