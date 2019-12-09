import React, {FunctionComponent} from 'react';
import {ActionCode} from '../../store/common/types';
import {mapActionCodeToDetails} from '../../store/common/actionCodes';

interface ActionImageProps {
    actionCode: ActionCode,
    onClick?: () => void,
    className?: string,
}

export const ActionImage: FunctionComponent<ActionImageProps> = ({actionCode, onClick, className = ''}) => {

    const actionCodeProps = mapActionCodeToDetails(actionCode);

    return <img onClick={onClick} width={'50'} height={'50'} src={actionCodeProps.src}
                alt={actionCodeProps.name} title={actionCodeProps.name}
                className={className}/>;

};
