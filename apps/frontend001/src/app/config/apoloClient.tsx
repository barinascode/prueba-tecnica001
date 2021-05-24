// import {
// 	ApolloClient,
// 	ApolloClientOptions,
// 	InMemoryCache,
// } from '@apollo/client';

// export const apolloClient = new ApolloClient({
// 	uri: 'https://api.github.com/graphql',
// 	cache: new InMemoryCache(),
// 	headers: {
// 		Authorization: 'bearer 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',
// 	},
// });

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
	
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('session');

	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

export const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
