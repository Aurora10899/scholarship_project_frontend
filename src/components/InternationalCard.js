import React from 'react';
import "../css/CardGrid.css";
import data3 from '../data/data3.json';

const InternationalCard = () => {
  return (
    <div className="scholarship-cards-container">
            {data3.data_3.map((scholarship, index) => (
                <a href={scholarship.iwebsites} target="_blank" rel="noopener noreferrer">
                    <div className="card" key={index}>
                        <h2>{scholarship.ititle}</h2>
                        <p className="des_less">{scholarship.icountry}</p>
                        <p className="des_less">{scholarship.ieducationLvl.join(', ')}</p>
                        <p className="des">{scholarship.idescription}</p>
                    </div>
                </a>
            ))}
        </div>
  )
}

export default InternationalCard
