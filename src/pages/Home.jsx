import React from 'react';
import SearchInput from '../components/SearchInput/SearchInput';
import SearchResults from '../components/SearchResults/SearchResults';
import CountryDetails from '../components/CountryDetails/CountryDetails';

const Home = () => {
    return (
        <div className="grid lg:grid-cols-2 max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <SearchInput />
            <SearchResults />
            <CountryDetails />
        </div>
    );
}

export default Home;
