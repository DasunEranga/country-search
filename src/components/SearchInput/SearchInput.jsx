/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import {fetchSearchCountry, fetchInitCountryListing} from '../../services/countriesAPI';
import { useAppContext } from '../../context/AppContext';
import _ from 'lodash';


const SearchInput = () => {
    // Destructure values from AppContext
    const {countryList, setCountryList, setCountry, setLoading} = useAppContext();
    const [query, setQuery] = useState("");

    /**
     * Fetch all countries with specific fields.
     *
     * @returns {void}
     */
    const fetchAllCountries = async () => {
        setLoading(true);
        const filter = 'fields=name,currencies,flags,coatOfArms,car';
        const fetchedCountries =  await fetchInitCountryListing(filter);
        setCountryList(fetchedCountries); 
        countryList && setLoading(false);
    };

    /**
     * Fetch filtered countries based on the search query.
     *
     * @param {string} query - The search query.
     * @returns {void}
     */
    const fetchFilteredCountries = async (query) => {
        setLoading(true);
        const fetchedCountries =  await fetchSearchCountry(query);
        setCountryList(fetchedCountries);
        fetchedCountries.length === 0 && setCountry(null)
        countryList && setLoading(false);
    };

    useEffect(() => {
        // Fetch all countries on component mount
        fetchAllCountries();
    }, []);

    /**
     * Debounced key up event handler to delay triggering the search after user input.
     *
     * @type {Function}
     * @param {string} value - The current value of the input.
     * @returns {void}
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleKeyUpDebounced = useCallback(
        _.debounce((value) => {
            value !== '' ? fetchFilteredCountries(value) : fetchAllCountries();
        }, 500),
        []
    );
    
    /**
     * Event handler for input change.
     *
     * @param {Event} e - The input change event.
     * @returns {void}
     */
    const handleInputChange = (e) => {
        handleKeyUpDebounced(query);
    }

    return (
        <div className='mb-10 lg:row-start-1 lg:row-end-2'>
            <label className="text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search country name..
            </label>
            <div className="relative ">
                <input
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    type="text"
                    className="w-full p-4 border border-black rounded-xl text-3xl"
                    placeholder=" Search country name.."
                    required
                    onKeyUp={handleInputChange}
                />
    
                <button className="absolute top-0 right-0 bottom-0 pr-4 text-white">
                   Clear
                </button>
            </div>
        </div>
    );
}

export default SearchInput;
