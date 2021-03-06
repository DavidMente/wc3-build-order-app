import React, {FunctionComponent} from 'react';
import {ActionImage} from '../actions/actionImage';
import RemoveBuildOrderTasks from '../build_order_form/removeBuildOrderTask';
import EditBuildOrderTasks from '../build_order_form/editBuildOrderTask';
import MoveBuildOrderTask, {MoveDirection} from '../build_order_form/moveBuildOrderTask';
import {ActionCode} from '../../store/common/types';
import IndentBuildOrderTask, {IndentDirection} from '../build_order_form/indentBuildOrderTask';

interface BuildOrderTaskProps {
    id: number,
    indentation: number,
    actionCode: ActionCode,
    description: string | null,
    editMode: boolean,
    isFirst: boolean,
    isLast: boolean,
}

export const BuildOrderTaskComponent: FunctionComponent<BuildOrderTaskProps> =
    ({id, indentation, actionCode, description, editMode = false, isFirst = false, isLast = false}) =>
        <div className={'build-order-item build-order-item-indent-' + indentation}>
            <div className='columns is-vcentered is-mobile'>
                {editMode ? <div className='column is-narrow is-paddingless'>
                    <IndentBuildOrderTask id={id} indentation={indentation} direction={IndentDirection.LEFT}/>
                    <IndentBuildOrderTask id={id} indentation={indentation} direction={IndentDirection.RIGHT}/>
                </div> : ''}
                <div className='column is-narrow'>
                    <ActionImage actionCode={actionCode}/>
                </div>
                <div className='column text-with-linebreaks'>
                    {editMode ? <EditBuildOrderTasks id={id} description={description}/> : description}
                </div>
                {editMode ? <div className={'column is-narrow'}>
                    {!isFirst ? <MoveBuildOrderTask id={id} direction={MoveDirection.UP}/> : ''}
                    {!isLast ? <MoveBuildOrderTask id={id} direction={MoveDirection.DOWN}/> : ''}
                </div> : ''}
                {editMode ? <div className={'column is-narrow'}>
                    <RemoveBuildOrderTasks id={id}/>
                </div> : ''}
            </div>
        </div>;
