import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


// https://rickandmortyapi.com/graphql

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client} >
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
