import React, { createContext, useState, useContext } from "react";

/**
 * AppContext is a React context object.
 * It is used to share certain state values across the entire app.
 */
const AppContext = createContext({});

/**
 * AppProvider is a React component that provides the AppContext to its children.
 * @param {object} props - The properties passed to this component.
 * @param {ReactNode} props.children - The child components of this provider.
 */
const AppProvider = ({ children }) => {
    const [country, setCountry] = useState('sri lanka');
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const contextValue = {
        country,
        setCountry,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

/**
 * useAppContext is a custom hook that provides a convenient way to access the AppContext.
 * @returns {object} The current context value.
 */
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
