import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CountryDetails = () => {
    const {country} = useAppContext();
    console.log('country', country);
    return (
        <div className="row-start-1 row-end-3">
            Selected Country {country && country.name.common}
        </div>
    );
}

export default CountryDetails;
