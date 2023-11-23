import React from "react";
// import 'dotenv/config'
import logo1 from "./../../assets/images/gkvlogo1.png";
import lions from "./../../assets/images/founder.webp";
import bcg from "./../../assets/images/headerbackground.jpg";

export default function Header() {
  return (
    <header>
      <div style={{ backgroundImage: `url(${bcg})` }}>
        <table className="container-fluid">
          <tbody>
            <tr>
              <td className="m-0 p-0">
                <img className="img-fluid" src={logo1} />
              </td>
              <td className="d-flex  flex-column justify-content-center align-items-center">
                <h1
                  style={{
                    letterSpacing: "2rem",
                    fontWeight: "400",
                    textShadow: "2px 2px grey",
                  }}
                >
                  
                </h1>

                <h1 style={{ fontSize: "2.2vw" , paddingTop : "50px"}}>
                  {" "}
               Faculty of Engineering and Technology, GKV Haridwar
                </h1>
                <p style={{ fontSize: "1.2vw" }}>
                  (formerly Gurkul Kangri Vishwavidyalaya)
                </p>
              </td>
              <td style={{}}>
                <img
                  className="img-fluid"
                  style={{ width: "6rem" }}
                  src={lions}
                />
              </td>
            

       
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}
