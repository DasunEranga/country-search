/**
 * Fetching response from a provided API
 * @param {string} path
 */
const fetchJsonResponse = async (path) => {
    try {
        const response = await fetch(path);
        const data = await response.json();
        console.log('util', data);
        // error handling
        if (!response.ok) {
        //   throw new Error('Network response was not ok');
            console.error('Network response was not ok', response.statusText);
        }
        return data;
    } catch (error) {
        console.error('error');
        throw new Error(`Failed to fetch JSON response from path: ${path}. Error: ${error.message}`);
    }
};

export { fetchJsonResponse };
