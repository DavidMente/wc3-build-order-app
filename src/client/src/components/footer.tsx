import React, {FunctionComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const Footer: FunctionComponent<RouteComponentProps<any>> = ({location}) => {

    const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';

    return !isEmbedded ? <footer className='footer'>
        <div className={'columns'}>
            <div className='column'>
                <h3 className={'title is-5'}><i className={'far fa-address-card'}/> About</h3>
                <p>This app was made by David Mente from <a href={'https://warcraft3.info'}
                                                            target={'_blank'}>Warcraft3.Info</a>.</p>
                <p>The code is available on <i className='fab fa-github'/> <a
                    href={'https://github.com/DavidMente/wc3-build-order-app'}
                    target={'_blank'}>Github</a>.</p>
            </div>
            <div className={'column'}>
                <h3 className={'title is-5'}><i className={'far fa-question-circle'}/> Tutorial</h3>
                <p className={'paragraph'}>Click on 'New Build Order' to create your own build order. After selecting
                    the race, you can add list
                    items by clicking on the action icons. Each action has some default text which you can change to
                    give more specific instructions. Use indentation to improve structure and readability.</p>
                <p className={'paragraph'}>You don't need an account to create a build order. You will receive a
                    password that you can use if
                    you wish to edit or delete your build order later on.</p>
            </div>
        </div>
    </footer> : <div/>;
};

export default withRouter(Footer);
