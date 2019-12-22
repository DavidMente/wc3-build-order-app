import React, {FunctionComponent} from 'react';
import {
    addTaskIndent,
    decreaseTaskIndent,
} from '../../store/build_order_form/actions';
import {connect} from 'react-redux';

interface IndentBuildOrderTaskProps {
    id: number,
    addIndent: (id: number) => void,
    decreaseIndent: (id: number) => void,
    indentation: number,
    direction: IndentDirection,
}

export enum IndentDirection {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

const mapDispatch = {
    addIndent: (id: number) => addTaskIndent(id),
    decreaseIndent: (id: number) => decreaseTaskIndent(id),
};

const IndentBuildOrderTask: FunctionComponent<IndentBuildOrderTaskProps> =
    ({id, addIndent, decreaseIndent, indentation, direction}) =>
        <div>
            {indentation < 3 && direction === IndentDirection.RIGHT ?
                <button className='button is-small' onClick={() => addIndent(id)} title={'add indent'}>
                    <i className='fas fa-arrow-right'/>
                </button> : ''}
            {indentation > 0 && direction === IndentDirection.LEFT ?
                <button className='button is-small' onClick={() => decreaseIndent(id)}
                        title={'decrease indent'}>
                    <i className='fas fa-arrow-left'/>
                </button> : ''}
        </div>;
export default connect(null, mapDispatch)(IndentBuildOrderTask);
