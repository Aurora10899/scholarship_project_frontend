import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import countriesData from '../data/countries.json';
import InternationalResult from './InternationalResult';
import "../css/Search.css";



const InternationalSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [icountry, setIcountry] = useState('');
    const [ieducationLvl, setIeducationLvl] = useState([]);
    const [internationals, setInternationals] = useState([]);

    const handleSearch = useCallback(async () => {
        try {
            const response = await axios.get(`//localhost:5000/api/internationals`, {
                params: {
                    iquery: searchQuery,
                    icountry,
                    ieducationLvl
                }
            });
            setInternationals(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [searchQuery, icountry, ieducationLvl]);

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
                <input type="text" value={searchQuery} onKeyUp={handleKeyUp} onChange={(e) => { setSearchQuery(e.target.value); handleSearch() }} placeholder="Search any Internationalational Scholarship......" />
            </div>
            <div className='filterResultContainer'>
                <div className='filterContainer'>
                    <div className='dropInput'>
                        <h3>Country</h3>
                        <select onChange={(e) => setIcountry(e.target.value)} onClick={handleSearch} className="dropSelectInput">
                            <option value="">All</option>
                            {countriesData.countries.map((field) => (
                                <option key={field.value} value={field.value}>{field.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='dropInput'>
                        <h3>Education Level</h3>
                        <select onChange={(e) => setIeducationLvl(e.target.value)} onClick={handleSearch} className='dropSelectInput'>
                            <option value="">All</option>
                            <option value="High School">High School</option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="PhD">PhD</option>
                        </select>
                    </div>
                </div>
                <div className="resultContainer">
                    <InternationalResult internationals={internationals} />
                </div>
            </div>
        </div>
    );
};

export default InternationalSearch;
