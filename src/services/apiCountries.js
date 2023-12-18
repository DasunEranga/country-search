const fetchInitCountryListing = async (filter = '') => {   
    try {
        const response = await fetch(`https://restcountries.com/v3.1/all?${filter}`);
        const data = await response.json();
        
        if (!response.ok) {
            // throw new Error('Network response was not ok');
            console.error('Network response was not ok', response.statusText);
        }
    
        return data;
    } catch (error) {
        console.error('Error fetching country data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

const fetchSearchCountry = async (query) => {   
    try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        const data = await response.json();
        
        if (!response.ok) {
            // throw new Error('Network response was not ok');
            console.error('Network response was not ok', response.statusText);
            return [];
        }
        
        return data;
    } catch (error) {   
        console.error('Error fetching country data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}    

export {fetchInitCountryListing, fetchSearchCountry}
