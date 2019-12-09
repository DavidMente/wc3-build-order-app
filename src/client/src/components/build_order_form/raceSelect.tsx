import React, {FunctionComponent} from 'react';
import {selectBuildOrderRace} from '../../store/build_order_form/actions';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {RaceIcon} from '../build_order/raceIcon';
import {Race} from '../../store/common/types';

const mapState = (state: RootState) => {
    return {
        selectedRace: state.buildOrderForm.race,
    };
};

const mapDispatch = {
    selectRace: (race: Race) => selectBuildOrderRace(race),
};

const connector = connect(
    mapState,
    mapDispatch,
);

type RaceSelectProps = ConnectedProps<typeof connector>

const RaceSelect: FunctionComponent<RaceSelectProps> = ({selectedRace, selectRace}) =>
    <div>
        <label className='label'>Choose the race:</label>
        <RaceIcon race={Race.HUMAN} onClick={() => selectRace(Race.HUMAN)} height={64} width={64}
                  className={'is-clickable' + (selectedRace !== Race.HUMAN ? ' img-inactive' : '')}/>
        <RaceIcon race={Race.NIGHTELF} onClick={() => selectRace(Race.NIGHTELF)} height={64} width={64}
                  className={'is-clickable' + (selectedRace !== Race.NIGHTELF ? ' img-inactive' : '')}/>
        <RaceIcon race={Race.ORC} onClick={() => selectRace(Race.ORC)} height={64} width={64}
                  className={'is-clickable' + (selectedRace !== Race.ORC ? ' img-inactive' : '')}/>
        <RaceIcon race={Race.UNDEAD} onClick={() => selectRace(Race.UNDEAD)} height={64} width={64}
                  className={'is-clickable' + (selectedRace !== Race.UNDEAD ? ' img-inactive' : '')}/>
    </div>;

export default connector(RaceSelect);
