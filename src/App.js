import './App.css';
import { React } from 'react';
import Pricecard from './Pricecard';

function App() {
  let data = [
    {
      plan:"FREE",
      price:"0",
      User:"Single User",
      isUser:true,
      Storage:"5GB Storage",
      isStorage:true,
      PublicProject:"Unlimited Public Projects",
      isPublicProject:true,
      Access:"Community Access",
      isAccess:true,
      PrivateProject:"Unlimited Private Projects",
      isPrivateProject:false,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      Subdomain:"Free Subdomain",
      isSubdomain:false,
      Status:"Monthly Status Reports",
      isStatus:false
    },
    {
        plan:"PLUS",
        price:"9",
        User:"5 Users",
        isUser:true,
        Storage:"50GB Storage",
        isStorage:true,
        PublicProject:"Unlimited Public Projects",
        isPublicProject:true,
        Access:"Community Access",
        isAccess:true,
        PrivateProject:"Unlimited Private Projects",
        isPrivateProject:true,
        PhoneSupport:"Dedicated Phone Support",
        isPhoneSupport:true,
        Subdomain:"Free Subdomain",
        isSubdomain:true,
        Status:"Monthly Status Reports",
        isStatus:false
    },

    { 
      plan:"PRO",
      price:"49",
      User:"Unlimited Users",
      isUser:true,
      Storage:"150GB Storage",
      isStorage:true,
      PublicProject:"Unlimited Public Projects",
      isPublicProject:true,
      Access:"Community Access",
      isAccess:true,
      PrivateProject:"Unlimited Private Projects",
      isPrivateProject:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      Subdomain:"Free Subdomain",
      isSubdomain:true,
      Status:"Monthly Status Reports",
      isStatus:true
    }
  ]
  return <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
      data.map((e)=>{
          return <Pricecard data={e}/>
        
        })
      }
   
    </div>
  </div>
</section>
    </>
  
}

export default App;
