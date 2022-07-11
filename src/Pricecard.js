import React from 'react'

function Pricecard(props) {
    console.log(props.data)
  return <>
{ /*<!-- Free Tier -->*/}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.data.isUser?"":"text-muted"}><span className="fa-li"><i className={props.data.isUser?"fas fa-check":"fas fa-times"}></i></span>{props.data.User}</li>
              <li className={props.data.isStorage?"":"text-muted"}><span className="fa-li"><i className={props.data.isStorage?"fas fa-check":"fas fa-times"}></i></span>{props.data.Storage}</li>
              <li className={props.data.isPublicProject?"":"text-muted"}><span className="fa-li"><i className={props.data.isPublicProject?"fas fa-check":"fas fa-times"}></i></span>{props.data.PublicProject}</li>
              <li className={props.data.isAccess?"":"text-muted"}><span className="fa-li"><i className={props.data.isAccess?"fas fa-check":"fas fa-times"}></i></span>{props.data.Access}</li>
              <li className={props.data.isPrivateProject?"":"text-muted"}><span className="fa-li"><i className={props.data.isPrivateProject?"fas fa-check":"fas fa-times"}></i></span>{props.data.PrivateProject}</li>
              <li className={props.data.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className={props.data.isPhoneSupport?"fas fa-check":"fas fa-times"}></i></span>{props.data.PhoneSupport}</li>
              <li className={props.data.isSubdomain?"":"text-muted"}><span className="fa-li"><i className={props.data.isSubdomain?"fas fa-check":"fas fa-times"}></i></span>{props.data.Subdomain}</li>
              <li className={props.data.isStatus?"":"text-muted"}><span className="fa-li"><i className={props.data.isStatus?"fas fa-check":"fas fa-times"}></i></span>{props.data.Status}</li>
            </ul>
            <div className="d-grid">
              <a href="https://cdnjs.com/libraries/font-awesome" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

    </>


}

export default Pricecard