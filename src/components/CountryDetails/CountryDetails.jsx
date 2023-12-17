import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CountryDetails = () => {
    const {country} = useAppContext();
    console.log('country', country);
    return (
        <div className="row-start-1 row-end-3">
            <div className="flex justify-center items-center h-full">
                <div className="flex flex-col gap-5 items-center w-3/4 h-auto p-5 shadow-xl rounded-xl">
                    <h2 className="text-3xl">{country?.name.common}</h2>
                    {country?.name?.official && <h3 className="text-center">{country.name.official}</h3>}
                    {country?.currencies ? (
                        Object.values(country.currencies).map(
                            (currency, index) => (
                                <p className="mb-2" key={index}>
                                <strong>Currency : </strong>
                                {currency.name} - ({currency.symbol})
                                </p>
                            )
                        )
                    ) : (
                        <p className="mb-2">
                        <strong>Currency : </strong> - -
                        </p>
                    )}
                    {country?.flags?.svg && <img src={country.flags.svg} alt={country?.name.common}  className="w-full h-20 object-contain"/> }
                    {country?.coatOfArms?.svg && <div>
                        <img src={country.coatOfArms.svg} alt={country?.name.common}  className="w-full h-20 object-contain"/>
                    </div> }
                    {country?.car?.side && <p className="mb-2">
                        <strong>Drive side on road</strong> : {country.car.side}
                    </p> }
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
