import React, { useEffect } from 'react';
import { fetchJsonResponse } from "./util";
import { useAppContext } from "../context/AppContext";

const fetchCountryListing = async () => {   
    // const { country, setCountry } = useAppContext();

    // useEffect(() => {
        // Check if data is already in localStorage
        const cachedData = localStorage.getItem('cachedData');
        
        if (cachedData) {
            // setCountry(JSON.parse(cachedData));
            console.log('from cache', JSON.parse(cachedData));
            return JSON.parse(cachedData);
        } else {
            // setCountry(fetchJsonResponse('https://restcountries.com/v3.1/all'));
            fetchJsonResponse('https://restcountries.com/v3.1/all');
            localStorage.setItem('cachedData', JSON.stringify(await fetchJsonResponse('https://restcountries.com/v3.1/all')));
            // localStorage.setItem('cachedData', JSON.stringify(country));
            console.log('from request');
            return await fetchJsonResponse('https://restcountries.com/v3.1/all');
        }
    // }, []);

    // console.log('contry API', await fetchJsonResponse('https://restcountries.com/v3.1/all'));
    // return await fetchJsonResponse('https://restcountries.com/v3.1/all');
}

export default fetchCountryListing;
    
