import React, { useContext, useEffect, useState } from "react";
import It from "./It";
import ShortTerm from "./ShortTerm";
import Itliteracy from "./ItLiteracy";
import { UserContext } from "../../../context-api/UserState";

const Courses = () => {
  const [CATEGORY, setCATEGORY] = useState('')
  const { setSelectedCourse } = useContext(UserContext)

  useEffect(() => { 
    setSelectedCourse({}) 
  }, [])
  

  const GetCourse = () => {
    switch (CATEGORY) {
      case 'it':
        return <It />
      case 'it_leteracy':
        return <Itliteracy />
      case 'short_term':
        return <ShortTerm /> 
      default:
        break;
    }
  }

  return (
    <div className="m-5">
      <div className="d-flex justify-content-center" >
      <div className="form-inline d-flex justify-content-between w-50 "> 
        <select className="form-control w-75" onChange={(e) => setCATEGORY(e.target.value)} >
          <option value={''}>---- SELECT COURSES CATEGORY ----</option>
          <option value={'it'}>IT COURSES</option>
          <option value={'it_leteracy'}>IT LETERACY COURSES</option>
          <option value={'short_term'}>SHORT TERM COURSES</option> 
        </select> 
      </div>
      </div>

      <GetCourse />
    </div>
  );
};

export default Courses;