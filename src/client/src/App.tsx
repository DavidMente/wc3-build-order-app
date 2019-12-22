import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import BuildOrdersComponent from './components/build_orders/buildOrdersComponent';
import Header from './components/header';
import BuildOrderForm from './components/build_order_form/buildOrderForm';
import BuildOrderComponent from './components/build_order/buildOrderComponent';
import {ConnectedRouter} from 'connected-react-router';
import {history} from './store';
import Footer from './components/footer';
import {withTracker} from './withTracker';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize(process.env.GOOGLE_ANALYTICS || 'UA-0000000-0');

class App extends Component {
    public render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Header/>
                    <section className='section'>
                        <div className='container main-container'>
                            <div className='columns is-centered'>
                                <div className={'column is-10'}>
                                    <div className={'main-section'}>
                                        <Switch>
                                            <Route exact path={'/'} component={withTracker(BuildOrdersComponent)}/>
                                            <Route exact path={'/create'} component={withTracker(BuildOrderForm)}/>
                                            <Route exact path={'/build_order/:id/:name/edit'}
                                                   component={withTracker(BuildOrderForm)}/>
                                            <Route exact path={'/build_order/:id/:name'}
                                                   component={withTracker(BuildOrderComponent)}/>
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </ConnectedRouter>
            </Provider>);
    }
}

export default App;
