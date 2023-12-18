const fetchInitCountryListing = async (filter = '') => {   
    try {
        const cachedData = localStorage.getItem('cachedData');
        if (cachedData) {
            // setCountry(JSON.parse(cachedData));
            return JSON.parse(cachedData);
        } else {
            const response = await fetch(`https://restcountries.com/v3.1/all?${filter}`);
            const data = await response.json();
            localStorage.setItem('cachedData', JSON.stringify(data));
            if (!response.ok) {
                // throw new Error('Network response was not ok');
                console.error('All countries network response was not ok', response.statusText);
            }
            return data;
        }
        
    
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
            console.error('Filterd country network response was not ok', response.statusText);
            return [];
        }
        
        return data;
    } catch (error) {   
        console.error('Error fetching country data:', error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}    

export {fetchInitCountryListing, fetchSearchCountry}
