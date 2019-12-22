import React, {FunctionComponent} from 'react';
import {ActionCodeType, getActionCodesByRaceAndType, mapActionCodeToDetails} from '../../store/common/actionCodes';
import {ActionCode, Race} from '../../store/common/types';
import ActionGridItem from './actionGridItem';

interface ActionRowProps {
    race: Race,
    type: ActionCodeType,
    selectedActionCodes: ActionCode[],
}

function requirementsFulfilled(requiredCodes: ActionCode[] | undefined, selectedActionCodes: ActionCode[]): boolean {
    return requiredCodes === undefined || requiredCodes.every((item) => selectedActionCodes.includes(item));
}

function checkForUniqueHeroes(actionCodeType: ActionCodeType | undefined, actionCode: ActionCode,
                              selectedActionsCodes: ActionCode[]): boolean {
    return actionCodeType !== ActionCodeType.HERO || !selectedActionsCodes.includes(actionCode);
}

function getAvailableActionCodes(allActionCodes: ActionCode[], selectedActionCodes: ActionCode[]): ActionCode[] {
    return allActionCodes.filter((actionCode) => {
        const actionCodeDetails = mapActionCodeToDetails(actionCode);
        return requirementsFulfilled(actionCodeDetails.requires, selectedActionCodes) &&
            checkForUniqueHeroes(actionCodeDetails.type, actionCodeDetails.code, selectedActionCodes);
    });
}

export const ActionRow: FunctionComponent<ActionRowProps> = ({selectedActionCodes, race, type}) =>
    <div>
        {getAvailableActionCodes(getActionCodesByRaceAndType(race, type), selectedActionCodes).map((actionCode) =>
            <ActionGridItem
                key={actionCode} actionCode={actionCode}/>)}
    </div>;
