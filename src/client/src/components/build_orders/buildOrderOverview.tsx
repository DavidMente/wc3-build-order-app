import React, {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';
import slugify from 'slugify';
import {BuildOrderHeader} from '../build_order/buildOrderHeader';
import {Race} from '../../store/common/types';

interface BuildOrderHeaderProps {
    id?: number,
    name: string,
    description: string | null,
    race: Race,
    author: string | null,
    views: number,
}

export const BuildOrderOverview: FunctionComponent<BuildOrderHeaderProps> =
    ({race, name, description, id, author, views}) =>
        <Link className={'box'} to={'/build_order/' + id + '/' + slugify(name)}>
            <div className={'columns'}>
                <div className={'column is-one-half'}>
                    <BuildOrderHeader name={name} race={race} author={author} views={views}/>
                </div>
                <div className={'column'}>
                    {description}
                </div>
            </div>
        </Link>;
