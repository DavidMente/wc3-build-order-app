import React, {FunctionComponent} from 'react';
import {
    ActionCodeType,
    getActionCodesByRaceAndType,
    mapActionCodeToDetails
} from '../../store/common/actionCodes';
import {ActionCode, Race} from '../../store/common/types';
import ActionGridItem from './actionGridItem';

interface ActionRowProps {
    race: Race,
    type: ActionCodeType,
    selectedActionCodes: ActionCode[],
}

function requirementsFulfilled(requiredCodes: ActionCode[], selectedActionCodes: ActionCode[]): boolean {
    return requiredCodes.every((item) => selectedActionCodes.includes(item));
}

function getAvailableActionCodes(allActionCodes: ActionCode[], selectedActionCodes: ActionCode[]): ActionCode[] {
    return allActionCodes.filter((actionCode) => mapActionCodeToDetails(actionCode).requires === undefined ||
        requirementsFulfilled(mapActionCodeToDetails(actionCode).requires || [], selectedActionCodes));
}

export const ActionRow: FunctionComponent<ActionRowProps> = ({selectedActionCodes, race, type}) =>
    <div>
        {getAvailableActionCodes(getActionCodesByRaceAndType(race, type), selectedActionCodes).map((actionCode) =>
            <ActionGridItem
                key={actionCode} actionCode={actionCode}/>)}
    </div>;
