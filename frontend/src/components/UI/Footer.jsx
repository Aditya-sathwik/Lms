import React from 'react'
// import "./../../style/style.css";
import fb from './../../assets/images/social-logo/fb.png'
import tw from './../../assets/images/social-logo/tw.png'
import yt from './../../assets/images/social-logo/yt.png'
// import bgImg from '../../assets/images/world_pattern.svg'


export default function Footer() {
  return (
  <div style={{bottom:'0' ,width:'100%' }}>



    <footer className=" footer" style={{  backgroundColor: 'var(--secondary)', width: '100%'}}>
      <div className="container-fluid " style={{marginTop: '0', paddingTop: "0"}}>
        <div className="row">
          <div className="col-lg-5 m-2" style={{marginLeft: 0, marginRight: 'auto'}}>
            <h3 className='text-light'>FET GKV, Haridwar</h3>
            <p style={{textAlign: 'justifyContent', color:'white'}}> Faculy of Engineering and Technology ,Delhi-Deharadun Highway, Bhadrabad , Haridwar 249402.</p>
          </div>

          <div className="col-lg-6" style={{marginRight: '0', marginLeft: 'auto'}}>
            <p className="text-end  text-secondary" style={{paddingRight: '20px'}}>For more updates follow us on</p>
            <ul className="d-flex justify-content-end pb-3 mb-3 list-unstyled  ">
              <li className="ms-3 ">
                <a  href="#">
               <img src={yt} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>

              <li className="ms-3 ">
                <a  href="#">
               <img src={fb} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>

              <li className="ms-3 ">
                <a  href="#">
               <img src={tw} style={{width:'3rem'}} alt="youtube" />
                </a>
              </li>
           
           
            </ul>
          </div>
        </div>

        <p className="text-center text-secondary  border-top p-0 m-0" id="copyright">Copyright &copy; 2022, all rights reserved. This website design and develop by <a href="https://gkv.ac.in/haridwar/" target="_blank" className='text-decoration-none'>Gkv</a></p>
      </div>
    </footer>


    </div>
  )
}


