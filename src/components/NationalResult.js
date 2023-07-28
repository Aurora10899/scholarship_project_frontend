import React from 'react'
import "../css/Result.css"
import info from "../images/info.png"

const NationalResult = ({ nationals }) => {
    return (
        <div>
            <div className="scholarshipListContainer">
                {nationals.map((national) => (
                    <div key={national._id} className="scholarshipCard">
                        <h3>{national.title}</h3>
                        <p>Field of Study: {national.fieldOfStudy}</p>
                        <p>Education: {national.educationLvl.join(", ")}</p>
                        <p>Gender: {national.gender}</p>
                        <p>Caste: {national.caste.join(", ")}</p>
                        <p>PwD Satus: {national.pwd}</p>
                        <p>{national.description}</p>
                        <a href={national.website} target="_blank" rel="noopener noreferrer"><img src={info} alt="more about" /></a>
                    </div>
                ))}
                <div className="scholarshipNoResult">
                    {nationals.length === 0 && <h2 className="NoResult">No scholarships found.</h2>}
                </div>

            </div>
        </div>
    )
}

export default NationalResult;
