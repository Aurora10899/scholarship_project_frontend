import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import "../css/Search.css";
import fieldsofStudyData from '../data/fields_of_study.json'
import NationalResult from './NationalResult';

const NationalSearch = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [gender, setGender] = useState('');
    const [fieldOfStudy, setfieldOfStudy] = useState('');
    const [educationLvl, setEducationLvl] = useState('');
    const [caste, setCaste] = useState([]);
    const [pwd, setPwd] = useState('');
    const [nationals, setNationals] = useState([]);

    console.log(searchQuery)
    const handleSearch = useCallback(async () => {
        try {
            const response = await axios.get(`//localhost:5000/api/nationals`, {
                params: {
                    query: searchQuery,
                    gender,
                    fieldOfStudy,
                    educationLvl,
                    caste,
                    pwd
                }
            });
            setNationals(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [searchQuery, gender, fieldOfStudy, educationLvl, caste, pwd]);

    useEffect(() => {
        handleSearch();
    }, [handleSearch]);

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' || e.key === 'Backspace' || e.key === 'Delete') {
            handleSearch();
        }
    }

    return (
        <div className="container">
            <div className="searchContainer">
                <input type="text" value={searchQuery} onKeyUp={handleKeyUp} onChange={(e) => { setSearchQuery(e.target.value); handleSearch() }} placeholder="Search any National Scholarship......" />
            </div>
            <div className='filterResultContainer'>
                <div className='filterContainer'>
                    <div className="dropInput">
                        <h3>Gender</h3>
                        <select onChange={(e) => setGender(e.target.value)} onClick={handleSearch}>
                            <option value="">None</option>
                            <option value="All">All</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='dropInput'>
                        <h3>Field of Study</h3>
                        <select onChange={(e) => setfieldOfStudy(e.target.value)} onClick={handleSearch} className="dropSelectInput">
                            <option value="">None</option>
                            {fieldsofStudyData.fields_of_study.map((field) => (
                                <option key={field.value} value={field.value}>{field.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='dropInput'>
                        <h3>Education Level</h3>
                        <select onChange={(e) => setEducationLvl(e.target.value)} onClick={handleSearch} className='dropSelectInput'>
                            <option value="">All</option>
                            <option value="Pre-Matric">Pre-Matric</option>
                            <option value="Post-Matric">Post-Matric</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="Ph.D.">Ph.D.</option>
                        </select>
                    </div>
                    <div className='dropInput'>
                        <h3>Caste</h3>
                        <select onChange={(e) => setCaste(e.target.value)} onClick={handleSearch} className='dropSelectInput'>
                            <option value="">All</option>
                            <option value="General">General</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                        </select>
                    </div>
                    <div className='dropInput'>
                        <h3>PwD Status</h3>
                        <select onChange={(e) => setPwd(e.target.value)} onClick={handleSearch} className='dropSelectInput'>
                            <option value="">None</option>
                            <option value="All">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>
                <div className="resultContainer">
                    <NationalResult nationals={nationals} />
                </div>
            </div>
        </div>
    );
};

export default NationalSearch;
