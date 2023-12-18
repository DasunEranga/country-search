import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import SearchResults from '../components/SearchResults/SearchResults';
import CountryDetails from '../components/CountryDetails/CountryDetails';
import { useAppContext } from '../context/AppContext';

const Home = () => {
    const {country} = useAppContext();
    return (
        <div className={`grid ${country && 'lg:grid-cols-2'} container mx-auto`}>
            <SearchInput />
            <SearchResults />
            <CountryDetails />
        </div>
    );
}

export default Home;
