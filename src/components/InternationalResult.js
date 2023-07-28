import React from 'react'
import "../css/Result.css"
import info from "../images/info.png"

const InternationalResult = ({internationals}) => {
  return (
    
    <div className="scholarshipListContainer">
      {internationals.map((international) => (
        <div key={international._id} className="scholarshipCard">
          <h3>{international.ititle}</h3>
          <p>Country: {international.icountry}</p>
          <p>Education: {international.ieducationLvl.join(", ")}</p>
          <p>{international.idescription}</p>
          <a href={international.iwebsites} target="_blank" rel="noopener noreferrer"><img src={info} alt="more about" /></a>
        </div>
      ))}
      {internationals.length === 0 && <h3 className="NoResult">No scholarships found.</h3>}
    </div>
  )
}

export default InternationalResult;