import React, { useState } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import SearchResults from './components/SearchResults/SearchResults';
import CountryDetails from './components/CountryDetails/CountryDetails';
import './App.css';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <h1>ReactJS Country Search</h1>
      <SearchInput onSelectCountry={handleSelectCountry} />
      <div className="content-container">
        <SearchResults onSelectCountry={handleSelectCountry} />
        {selectedCountry && <CountryDetails country={selectedCountry} />}
      </div>
    </div>
  );
}

export default App;