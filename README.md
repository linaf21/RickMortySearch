## Project Name

Rick and Morty Search

## Introduction

This README provides instructions on how to run the Rick and Morty Search app, as well as information on how to use the Rick and Morty API that's integrated into the project.

## How to Run the App

To run the app locally, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Open your terminal and navigate to the project's root directory.
3. Run the following command to install the project's dependencies:

### `npm install`

4. After the dependencies are installed, you can start the development server by running:

  ### `npm start`

   This command will start the app and open it in your default web browser at http://localhost:3000.

## How to Utilize the Rick and Morty API

The Rick and Morty API provides access to various resources from the TV show "Rick and Morty." It offers hundreds of characters, images, locations, and episodes. You can interact with the API through REST(ish) and GraphQL queries.

### GraphQL Query Example

In this project, the Rick and Morty API is used to fetch character information using a GraphQL query. Here's how it's done:

1. First, make sure you have the Apollo Client installed as a dependency in your project.

2. Define a GraphQL query for retrieving character data. In your code, it looks like this:

   ```javascript
   const CHARACTERS_QUERY = gql`
     {
       characters {
         results {
           id
           name
           species
           image
           status
           gender
         }
       }
     }
   `;
   ```

3. Use the `useQuery` hook from Apollo Client to fetch data using the defined query. Here's how it's used:

   ```javascript
   const { loading, data } = useQuery(CHARACTERS_QUERY);
   ```

   This hook returns the `loading` state and the fetched `data`.

### Integrating API in Index

In the `index.js` (or `index.tsx`) file, the Apollo Client is set up to interact with the Rick and Morty GraphQL API. Here's how the integration is done:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
```

By following these steps, you'll be able to utilize the Rick and Morty API to fetch character information and integrate it into your ReactJS app.

---

Remember to refer to the official documentation of both ReactJS and the Rick and Morty API for more detailed information and advanced usage. If you have any questions or need further assistance, feel free to reach out!

