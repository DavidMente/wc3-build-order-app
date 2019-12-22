import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store';
import {ActionCode, ActionCodeDetails, ActionCodeType, Race} from '../../store/common/types';
import {ActionRow} from './actionRow';
import ActionGridItem from './actionGridItem';
import {mapActionCodeToDetails} from '../../store/common/actionCodes';

interface ActionGridProps {
    race: Race | null,
    selectedActionCodes: ActionCode[],
    actionCodeDetails: ActionCodeDetails[],
}

const mapState = (state: RootState): ActionGridProps => {
    return {
        race: state.buildOrderForm.race,
        selectedActionCodes: state.buildOrderForm.tasks.map((task) => task.actionCode),
        actionCodeDetails: state.buildOrderForm.tasks.map((task) => mapActionCodeToDetails(task.actionCode)),
    };
};

const ActionGrid: FunctionComponent<ActionGridProps> = ({selectedActionCodes, race, actionCodeDetails}) => {

    const hasPickedHero = actionCodeDetails
        .find((details) => details.type === ActionCodeType.HERO) !== undefined;

    return race !== null ? <div className='box'>
        <label className='label'>Select an action:</label>
        <ActionRow race={race} type={ActionCodeType.UNIT} selectedActionCodes={selectedActionCodes}/>
        {!hasPickedHero ?
            <ActionRow race={race} type={ActionCodeType.HERO} selectedActionCodes={selectedActionCodes}/> : ''}
        <ActionRow race={race} type={ActionCodeType.BUILDING} selectedActionCodes={selectedActionCodes}/>
        <ActionRow race={race} type={ActionCodeType.UPGRADE} selectedActionCodes={selectedActionCodes}/>
        <ActionRow race={race} type={ActionCodeType.RESEARCH} selectedActionCodes={selectedActionCodes}/>
        <div>
            <ActionGridItem actionCode={ActionCode.CUSTOM}/>
        </div>
    </div> : <span/>;
};
export default connect(mapState)(ActionGrid);
