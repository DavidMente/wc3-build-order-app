import React, {FunctionComponent} from 'react';
import _ from 'lodash';
import {ActionImageWithCount} from '../actions/actionImageWithCount';
import {BuildOrderTask} from '../../store/build_order_form/types';
import {Race} from '../../store/common/types';
import {getStartingActionCodesByRace, stringToActionCode} from '../../store/common/actionCodes';

interface BuildOrderSummaryProps {
    buildOrderTasks: BuildOrderTask[],
    race: Race | null,
}

export const BuildOrderSummary: FunctionComponent<BuildOrderSummaryProps> = ({buildOrderTasks, race}) => {

    const actionCodes = buildOrderTasks.map((task) => task.actionCode);
    const actionCodesWithStartingUnits = [...getStartingActionCodesByRace(race), ...actionCodes];
    const aggregatedActionCodes = _.countBy(actionCodesWithStartingUnits);
    const sortedActionCodes = _(aggregatedActionCodes)
        .toPairs()
        .orderBy([1], ['desc'])
        .fromPairs()
        .value();

    return <div className={'box'}>
        <h2 className='title is-5'>Summary</h2>
        {Object.keys(sortedActionCodes).map((actionCode) =>
            <ActionImageWithCount key={actionCode} actionCode={stringToActionCode(actionCode)}
                                  count={aggregatedActionCodes[actionCode]}/>)}
        <p className='help'>*includes starting buildings/units</p>
    </div>;
};
