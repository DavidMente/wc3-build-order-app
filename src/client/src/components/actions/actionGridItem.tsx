import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {addBuildOrderTask} from '../../store/build_order_form/actions';
import {ActionImage} from './actionImage';
import {ActionCode} from '../../store/common/types';

interface ActionGridItemProps {
    actionCode: ActionCode,
    addActionToBuildOrder: (actionCode: ActionCode) => void
}

const mapDispatch = {
    addActionToBuildOrder: (actionCode: ActionCode) => addBuildOrderTask(actionCode),
};

const ActionGridItem: FunctionComponent<ActionGridItemProps> = ({actionCode, addActionToBuildOrder}) =>
    <ActionImage actionCode={actionCode} onClick={() => addActionToBuildOrder(actionCode)} className={'is-clickable'}/>;

export default connect(null, mapDispatch)(ActionGridItem);
