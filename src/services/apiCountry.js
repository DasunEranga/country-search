import { fetchJsonResponse } from "./util";

const fetchCountryListing = async () => {
    return await fetchJsonResponse('https://restcountries.com/v3.1/all');
}

export default fetchCountryListing;
    
