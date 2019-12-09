import React, {FunctionComponent} from 'react';
import {moveBuildOrderTaskDown, moveBuildOrderTaskUp} from '../../store/build_order_form/actions';
import {connect} from 'react-redux';

export enum MoveDirection {
    UP = 'UP',
    DOWN = 'DOWN',
}

interface MoveBuildOrderTaskProps {
    id: number,
    moveBuildOrderTask: (id: number, direction: MoveDirection) => void,
    direction: MoveDirection,
}

const mapDispatch = {
    moveBuildOrderTask: (id: number, direction: MoveDirection) => {
        switch (direction) {
            case MoveDirection.UP:
                return moveBuildOrderTaskUp(id);
            case MoveDirection.DOWN:
                return moveBuildOrderTaskDown(id);
        }
    },
};

const MoveBuildOrderTask: FunctionComponent<MoveBuildOrderTaskProps> = ({id, moveBuildOrderTask, direction}) =>
    <button className='button is-block is-small' onClick={() => moveBuildOrderTask(id, direction)}>
        {direction === MoveDirection.UP ? <i className='fas fa-arrow-up'/> : <i className='fas fa-arrow-down'/>}
    </button>;

export default connect(null, mapDispatch)(MoveBuildOrderTask);
