import React from 'react';
import "../css/CardGrid.css";
import data2 from '../data/data2.json';

const NationalCard = () => {
    return (
        <div className="scholarship-cards-container">
            {data2.data_2.map((scholarship, index) => (
                <a href={scholarship.website} target="_blank" rel="noopener noreferrer">
                    <div className="card" key={index}>
                        <h2>{scholarship.title}</h2>
                        <p className="des_less">{scholarship.fieldOfStudy}</p>
                        <p className="des_less">{scholarship.educationLvl.join(', ')}</p>
                        <p className="des">{scholarship.description}</p>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default NationalCard;
