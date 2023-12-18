import React from 'react';
import { useAppContext } from '../../context/AppContext';

const CountryDetails = () => {
    const {country, setCountry} = useAppContext();
    
    const handleClose = () => {
        setCountry(null)
    }

    return (
        country && (
            <div className="row-start-1 row-end-3 after:absolute after:block after:inset-0 after:bg-black after:opacity-80 lg:after:hidden">
                <div className="flex justify-center items-center lg:h-full absolute w-full top-1/2 left-0 -translate-y-1/2 z-10 lg:static lg:translate-y-0">
                    <div 
                        className={`relative w-3/4 h-auto p-5 bg-white shadow-xl rounded-xl transition-opacity ${country ? 'opacity-100': 'opacity-0' }`}
                    >
                        <div className="flex flex-col gap-5 items-center">
                            <h2 className="text-3xl">{country?.name.common}</h2>
                            {country?.name?.official && <h3 className="text-center">{country.name.official}</h3>}
                            {country?.currencies && (
                                Object.values(country.currencies).map(
                                    (currency, index) => (
                                        <p className="text-center" key={index}>
                                        <strong>Currency : </strong>
                                        {currency.name} - ({currency.symbol})
                                        </p>
                                    )
                                )
                            )}
                            {country?.flags?.svg && <img src={country.flags.svg} alt={country?.name.common}  className="w-full h-20 object-contain"/> }
                            {country?.coatOfArms?.svg && <div>
                                <img src={country.coatOfArms.svg} alt={country?.name.common}  className="w-full h-20 object-contain"/>
                            </div> }
                            {country?.car?.side && <p className="text-center">
                                <strong>Drive side on road</strong> : {country.car.side}
                            </p> }
                        </div>
                        <span 
                            onClick={handleClose}
                            className="block w-10 h-10 bg-close absolute top-0 right-0 bg-cover hover:cursor-pointer" 
                        />
                    </div>
                </div>
            </div>
        )
    );
}

export default CountryDetails;
