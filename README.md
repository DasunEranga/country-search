# Country Search Application

This is a single-page ReactJS application that allows users to query the REST Countries API and display relevant information about the searched country.

## Live Demo

## Demo

Explore the live demo of the Superloop Country Search application: [View Demo](https://superloop-country-search.netlify.app/)

Feel free to interact with the search functionality, view search results, and experience the features firsthand.

## Features

### 1. Search and Filter Countries

- **Real-time Search:** Perform real-time searches for countries based on the entered query.
- **Debounced Input:** User inputs are debounced, reducing the number of API calls and improving performance during typing.

### 2. Display Search Results

- **Search Results Count:** The number of search results is displayed in the user interface.
- **Interactive Results:** Click on a country from the results to view additional details.

### 3. Performance Optimization

- **API Call Optimization:** Data fetching is optimized by debouncing user inputs, preventing excessive API calls.
- **Local Storage Cache:** Utilize local storage to cache frequently accessed data, reducing reliance on network requests.

### 4. Responsive Design

- **Mobile-Friendly:** The user interface is designed to be responsive, ensuring a seamless experience across different devices.


## Prerequisites

Ensure that you have Node.js and npm installed.

- React ^18.2.0
- TailwindCSS ^3.3.5
- lodash "^4.17.21"

## Getting Started


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DasunEranga/country-search.git
2. Navigate to the project directory:

   ```bash
   cd country-search
3. Install dependencies:

   ```bash
   npm install
### Running the Application

4. Run the development server:

   ```bash
   npm start
Visit http://localhost:3000 in your web browser.