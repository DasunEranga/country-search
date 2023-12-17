import React, { useEffect, useState } from 'react';
import fetchCountryListing from '../../services/apiCountry';
// import { useAppContext } from '../../context/AppContext';


const SearchResults = () => {
    // const {country, setCountry} = useAppContext();
    const [loading, setLoading] = useState(false);
    const [countryList, setCountryList] = useState({});

    useEffect(() => {
        const updateListing = async () => {
            setLoading(true);
            const countryList = await fetchCountryListing();
            setCountryList(countryList);
            countryList && setLoading(false);
        };

        updateListing();
    }, []);
    

    return (
        <div>
            <h2>SR {countryList.length}</h2>
            {loading && <p>Loading results...</p>}
            {!loading && countryList.length === 0 && <p>No results found.</p>}
            {!loading && countryList.length > 0 && (
                <ul>
                {countryList.map((result) => (
                    <li key={result.name.common} >
                        {result.name.common}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}

export default SearchResults;
