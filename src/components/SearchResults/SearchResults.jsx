import React from 'react';
import { useAppContext } from '../../context/AppContext';

const SearchResults = () => {
    // Destructure values from AppContext
    const { countryList, setCountry, loading} = useAppContext();

    /**
     * Handle the selection of a country from the search results.
     *
     * @param {Object} result - The selected country object.
     * @returns {void}
     */
    const handleSelectCountry = result => {
        setCountry(result);
    }

    return (
        <div className="relative lg:row-start-2 lg:row-end-3 after:block after:absolute after:w-full after:h-24 after:bottom-0 after:left-0 after:bg-gradient-radial after:pointer-events-none">
            <div className=" w-full h-[calc(100vh-300px)] lg:h-[calc(100vh-380px)] overflow-y-auto p-4 rounded-xl text-xl lg:text-2xl">
                {loading && <p>Loading results...</p>}
                {!loading && countryList?.length === 0 && <p>No results found.</p>}
                {!loading && countryList?.length > 0 && (
                    <ul>
                    {countryList?.map((result) => (
                        <li 
                            key={result.name.common} 
                            onClick={() => handleSelectCountry(result)}
                            className="flex gap-x-8 mb-2 lg:mb-5 p-3 items-center rounded-xl shadow-md  transition-all duration-300 hover:shadow-xl hover:cursor-pointer"
                        >
                            <img src={result.flags.svg} alt={result.name.common}  className="w-8 h-8 lg:w-12 lg:h-12 rounded-full object-cover border border-black shadow-xl"/> 
                            <p>{result.name.common}</p>
                        </li>
                    ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
