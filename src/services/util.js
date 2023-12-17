/**
 * Fetching response from a provided API
 * @param {string} path
 */
const fetchJsonResponse = async (path) => {
    try {
        const response = await fetch(path);
        console.log('try');
        return await response.json();
    } catch (error) {
        console.error('error');
        throw new Error(`Failed to fetch JSON response from path: ${path}. Error: ${error.message}`);
    }
};

export { fetchJsonResponse };
