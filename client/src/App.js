import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

// GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

//Middleware that will attach the JWT token to authorization header
const authLink = setContext((_, { headers }) => {
  // Authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  //Setting token on headers
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // client to execute the `authLink` middleware to GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<SearchBooks/>} 
            />
            <Route 
              path="/saved" 
              element={<SavedBooks/>} 
            />
            <Route 
              path='*' 
              element={<h1 className="display-2">Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
