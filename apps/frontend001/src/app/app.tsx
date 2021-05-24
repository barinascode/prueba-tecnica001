import  "./tailwind.css";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { requireLogin } from './midlewares';
import * as Pages from './pages'
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from "./config/apoloClient";





export function App() {

	return (
	<ApolloProvider client={ apolloClient }>
		<GuardProvider guards={[requireLogin]}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={ Pages.Home } />
					<Route exact path='/login' component={ Pages.Login } />
					<Route exact path='/register' component={ Pages.Register } />
					<GuardedRoute exact path="/profile" meta={{ auth: true }} component={ Pages.Profile } />
				</Switch>
			</BrowserRouter>
			</GuardProvider>
		</ApolloProvider>
	);
}

export default App;
