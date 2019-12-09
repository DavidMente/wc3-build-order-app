import React, {FunctionComponent} from 'react';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {setBuildOrdersRace} from '../../store/build_orders/actions';
import {Race, stringToRace} from '../../store/common/types';

const mapState = (state: RootState) => {
    return {
        race: state.buildOrders.params.race,
    };
};

const mapDispatch = {
    filter: (race: Race | null) => setBuildOrdersRace(race),
};

const connector = connect(mapState, mapDispatch);

const BuildOrdersRaceFilter: FunctionComponent<ConnectedProps<typeof connector>> = ({race, filter}) =>
    <div className={'field'}>
        <div className='select'>
            <select className={'select'} value={race || ''} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                const selectedRace = stringToRace(event.target.value);
                filter(selectedRace);
            }}>
                <option value={''}>All races</option>
                <option value={Race.NIGHTELF}>Nightelf</option>
                <option value={Race.HUMAN}>Human</option>
                <option value={Race.ORC}>Orc</option>
                <option value={Race.UNDEAD}>Undead</option>
            </select>
        </div>
    </div>;

export default connector(BuildOrdersRaceFilter);
