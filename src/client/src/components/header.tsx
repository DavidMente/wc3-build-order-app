import React, {FunctionComponent} from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';

const Header: FunctionComponent<RouteComponentProps<any>> = ({location}) => {

    const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';

    return !isEmbedded ? <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
            <Link to={'/'} className='navbar-item'>
                Browse
            </Link>
            <Link to={'/create'} className='navbar-item'>
                New Build Order
            </Link>
        </div>
    </nav> : <div/>;
};

export default withRouter(Header);
