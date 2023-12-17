import React, { useState, useCallback, useEffect } from 'react';
import {fetchSearchCountry, fetchInitCountryListing} from '../../services/apiCountry';
import { useAppContext } from '../../context/AppContext';
import _ from 'lodash';


const SearchInput = () => {
    const {setCountryList, loading, setLoading} = useAppContext();
    const [query, setQuery] = useState("");

    const debouncedfetchFilteredCountries = useCallback(_.debounce(async (query) => {
        const fetchedCountries =  await fetchSearchCountry(query);
        setCountryList(fetchedCountries);
    }, 500), []); // 500ms debounce time

    const fetchAllCountries = async () => {
        const filter = 'fields=name,currencies,flag,coatOfArms,car';
        const fetchedCountries =  await fetchInitCountryListing(filter);
        setCountryList(fetchedCountries); 
    };

    const fetchFilteredCountries = async () => {
        debouncedfetchFilteredCountries(query)
    };

    useEffect(() => {
        fetchAllCountries();
    }, []);

    
    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (query !== '') {
            fetchFilteredCountries();
            console.log('not emp');
        } else {
            fetchAllCountries();
            console.log('emp');
        }
    }

    return (
        <div className='row-start-1 row-end-2'>
            <label className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search country name..
            </label>
            <div className="relative ">
                <input
                    onChange={handleInputChange}
                    value={query}
                    // onKeyDown={handleKeyDown}
                    type="text"
                    className="border"
                    placeholder=" Search country name.."
                    required
                />
    
                <button className="absolute top-0 right-0 bottom-0 pr-4 text-white">
                   Clear
                </button>
            </div>
        </div>
    );
}

export default SearchInput;
