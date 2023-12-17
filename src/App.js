import React from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <AppProvider>
          <Header/>
          <Home/>
          <Footer/>
        </AppProvider>
      </div>
  );
}

export default App;