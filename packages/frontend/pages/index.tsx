import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './home';
import './styles.css';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache,
});

const Index: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default Index;
