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
                                            <Route exact path={'/'} component={BuildOrdersComponent}/>
                                            <Route exact path={'/create'} component={BuildOrderForm}/>
                                            <Route exact path={'/build_order/:id/:name/edit'}
                                                   component={BuildOrderForm}/>
                                            <Route exact path={'/build_order/:id/:name'}
                                                   component={BuildOrderComponent}/>
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
