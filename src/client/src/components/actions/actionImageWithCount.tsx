import React, {FunctionComponent} from 'react';
import {ActionImage} from './actionImage';
import {ActionCode} from '../../store/common/types';

interface ActionImageWithCountProps {
    actionCode: ActionCode,
    count: number,
}

export const ActionImageWithCount: FunctionComponent<ActionImageWithCountProps> = ({actionCode, count}) =>
    <span className={'action-image-container'}>
        <ActionImage actionCode={actionCode}/>
        <span className={'action-image-count is-size-3'}>{count}</span>
    </span>;
