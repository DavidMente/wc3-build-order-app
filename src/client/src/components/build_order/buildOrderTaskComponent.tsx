import React, {FunctionComponent} from 'react';
import {ActionImage} from '../actions/actionImage';
import RemoveBuildOrderTasks from '../build_order_form/removeBuildOrderTask';
import EditBuildOrderTasks from '../build_order_form/editBuildOrderTask';
import MoveBuildOrderTask, {MoveDirection} from '../build_order_form/moveBuildOrderTask';
import foodImg from '../../assets/images/food.png';
import {ActionCode} from '../../store/common/types';

interface BuildOrderTaskProps {
    id: number,
    actionCode: ActionCode,
    description: string | null,
    accumulatedFoodCost?: number,
    accumulatedSupply?: number,
    editMode: boolean,
}

export const BuildOrderTaskComponent: FunctionComponent<BuildOrderTaskProps> =
    ({id, actionCode, description, editMode = false, accumulatedFoodCost = 0, accumulatedSupply = 0}) =>
        <div className='build-order-item'>
            <div className='columns is-vcentered is-mobile'>
                {editMode ? <div className='column is-narrow'>
                    <MoveBuildOrderTask id={id} direction={MoveDirection.UP}/>
                    <MoveBuildOrderTask id={id} direction={MoveDirection.DOWN}/>
                </div> : ''}
                <div className='column is-narrow'>
                    <ActionImage actionCode={actionCode}/>
                </div>
                <div className='column'>
                    {editMode ? <EditBuildOrderTasks id={id} description={description}/> : description}
                </div>
                <div className={'column is-narrow'}>
                    <div className={accumulatedFoodCost > accumulatedSupply ? 'has-text-danger' : ''}>
                        {accumulatedFoodCost + '/' + accumulatedSupply} <img alt={'supply'} src={foodImg}/>
                    </div>
                    {editMode ? <RemoveBuildOrderTasks id={id}/> : ''}
                </div>
            </div>
        </div>;
