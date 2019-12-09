import React, {FunctionComponent} from 'react';
import {RaceIcon} from './raceIcon';
import {Race} from '../../store/common/types';

interface BuildOrderHeaderProps {
    name: string,
    race: Race,
    author: string | null,
    views: number,
}

export const BuildOrderHeader: FunctionComponent<BuildOrderHeaderProps> = ({race, name, author, views}) =>
    <div className={'is-vertical-top'}>
        <RaceIcon race={race}/>
        <div style={{marginLeft: '5px'}} className={'is-inline-block'}>
            <h1 className='title is-marginless'>
                {name}
            </h1>
            <div className={'info'}>by {author || 'anonymous'}</div>
            <div className={'info'}><i className='far fa-eye'/> {views}</div>
        </div>
    </div>;
