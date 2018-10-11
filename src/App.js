import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'

import NotFound from './notfound/Notfound'
import './App.css';
//import createBrowserHistory from 'history/createBrowserHistory';

//MYHOC
import asyncComponent from './AsyncComponent'

const Home = asyncComponent(() =>
    import('./home/Home').then(module => module.default)
)

const Maps = asyncComponent(() =>
    import('./maps/Maps').then(module => module.default)
)

const Blog = asyncComponent(() =>
    import('./blog/Blog').then(module => module.default)
)

//const history = createBrowserHistory();

class App extends Component {
    render () {
        return (
            <Router>
                <div>
                    <header className="header">
                        <nav className="navbar container">
                            <div className="navbar-brand">
                                <Link to="/">
                                    <span className="navbar-item">Home</span>
                                </Link>
                            </div>

                            <div className="navbar-end">
                                <Link to="/maps">
                                    <span className="navbar-item">Maps</span>
                                </Link>
                                <Link to="/blog">
                                    <span className="navbar-item">Blog</span>
                                </Link>
                            </div>
                        </nav>
                    </header>

                    <section className="content">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/maps" component={Maps} />
                            <Route path="/blog" component={Blog} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </section>
                </div>
            </Router>
        )
    }
}

export default App;
