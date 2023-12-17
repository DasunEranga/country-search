import React, { useEffect, useState } from 'react';
import {fetchInitCountryListing} from '../../services/apiCountry';
import { useAppContext } from '../../context/AppContext';


const SearchResults = () => {
    const { countryList, setCountryList, setCountry, loading, setLoading} = useAppContext();
    
    const handleSelectCountry = result => {
        console.log('res', result);
        setCountry(result);
    }

    return (
        <div className="row-start-2 row-end-3'">
            <h2>SR {countryList?.length}</h2>
            {loading && <p>Loading results...</p>}
            {!loading && countryList?.length === 0 && <p>No results found.</p>}
            {!loading && countryList?.length > 0 && (
                <ul>
                {countryList.map((result) => (
                    <li key={result.name.common} onClick={() => handleSelectCountry(result)}>
                        {result.name.common}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
}

export default SearchResults;
