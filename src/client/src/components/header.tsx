import React, {FunctionComponent} from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';

const Header: FunctionComponent<RouteComponentProps<any>> = ({location}) => {

    const isEmbedded = new URLSearchParams(location.search).get('embedded') === '1';

    return !isEmbedded ? <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
            <Link to={'/'} className='navbar-item'>
                <i className={'far fa-list-alt'} style={{marginRight: '5px'}}/>
                <span>Browse Build Orders</span>
            </Link>
            <Link to={'/create'} className='navbar-item'>
                <i className={'fas fa-plus'} style={{marginRight: '5px'}}/>
                <span>New Build Order</span>
            </Link>
        </div>
    </nav> : <div/>;
};

export default withRouter(Header);
