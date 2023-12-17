import { fetchJsonResponse } from "./util";

const fetchInitCountryListing = async (filter = '') => {   
        // Check if data is already in localStorage
        // const cachedData = localStorage.getItem('cachedData');
        
        // if (cachedData) {
        //     // setCountry(JSON.parse(cachedData));
        //     console.log('from cache', JSON.parse(cachedData));
        //     return JSON.parse(cachedData);
        // } else {
            // setCountry(fetchJsonResponse('https://restcountries.com/v3.1/all'));
            // const response = await fetchJsonResponse(`https://restcountries.com/v3.1/all?${filter}`);
            // const data = await response.json();
            // localStorage.setItem('cachedData', JSON.stringify(response));
            // console.log('from request');
            // return data;
        // }

        try {
            const response = await fetch(`https://restcountries.com/v3.1/all?${filter}`);
            
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
        
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching country data:', error);
            throw error; // Rethrow the error to handle it in the calling code
        }



}

const fetchSearchCountry = async (query) => {   
    // try {
    //     const response = await fetchJsonResponse(`https://restcountries.com/v3.1/name/${searchInput}`);
    //     return response;
    // } catch (error) {
    //     console.error(error);
    //     throw new Error(`Failed to fetch JSON response from path: Error: ${error.message}`);
    // }
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching country data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}    

export {fetchInitCountryListing, fetchSearchCountry}
