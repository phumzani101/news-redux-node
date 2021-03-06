import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './layouts/Home';
import About from './layouts/About';
import Layout from './layouts/Layout';
import { Provider } from 'react-redux'
import store from './store/index'
import NewsArticle from './containers/NewsArticle';
import NewsSubmit from './containers/NewsSubmit';
import Login from './presentation/Login';
import Register from './presentation/Register';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path="/news/submit" component={NewsSubmit} />
						<Route path="/news/:id" component={NewsArticle} />
						<Route path="/about" component={About} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
					</Switch>
				</Layout>
			</BrowserRouter>
		</Provider>
	)
}

export default App;
