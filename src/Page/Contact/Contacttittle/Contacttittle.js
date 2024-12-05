import React from "react";
import SosalMedia from "../../../Component/SosalMedia/SosalMedia";
import CssStyle from './Contacttittle.module.css';

const Contacttittle = () => {

    return <div className={ CssStyle.Con }>

           <div className={ CssStyle.Container}>
                <h1> CONTACT_</h1>

                <div className={ CssStyle.Adress}>

                    <div>Koteshwar Kathamandau Nepal</div>

                    <div> 3th floor Koteshwar near NIC bank  </div>

                </div> 

                <div className={ CssStyle.PhoneNunmer } >

                    <div>Ph: 9709475100  </div>
                    <div>Mob: 9709475100 </div>

                </div>

                <div className={ CssStyle.SosalMedia}>

                    <div> Gmail : saharjun2105@gmail.com</div>
                    <div className={ CssStyle.media} > <SosalMedia

                        color = 'white'
                        size = '30px'
                    
                        /> </div>

                </div>

                <div className={ CssStyle.CopyRight } >

                    <div>© 2024 by Personal Life Coach. </div>
                    <div >Proudly created with Wix.com  </div>

                </div>
           </div>

    </div>
}

export default Contacttittle;