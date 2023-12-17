import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CountryDetails = () => {
    const {country} = useAppContext();
    console.log('cd', country);
    return (
        <div>
            CD
        </div>
    );
}

export default CountryDetails;
