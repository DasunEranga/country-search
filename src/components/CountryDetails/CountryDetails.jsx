import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CountryDetails = () => {
    const {country} = useAppContext();
    console.log('cd', country);
    return (
        <div>
            Selected Country {country.name.common}
        </div>
    );
}

export default CountryDetails;
