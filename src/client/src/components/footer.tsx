import React, {FunctionComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';

const Footer: FunctionComponent<RouteComponentProps<any>> = ({location}) => {

    const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';

    return !isEmbedded ? <footer className='footer'>
        <div className='content has-text-centered'>
            <p>made by David Mente from <a href={'https://warcraft3.info'} target={'_blank'}>Warcraft3.Info</a></p>
            <p><a href={'https://github.com/DavidMente/wc3-build-order-app'} target={'_blank'}>Github</a></p>
        </div>
    </footer> : <div/>;
};

export default withRouter(Footer);
