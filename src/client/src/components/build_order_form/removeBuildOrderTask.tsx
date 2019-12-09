import React, {FunctionComponent} from 'react';
import {removeBuildOrderTask} from '../../store/build_order_form/actions';
import {connect} from 'react-redux';

interface RemoveBuildOrderTaskProps {
    id: number,
    removeTask: (id: number) => void,
}

const mapDispatch = {
    removeTask: (id: number) => removeBuildOrderTask(id),
};

const RemoveBuildOrderTasks: FunctionComponent<RemoveBuildOrderTaskProps> = ({id, removeTask}) =>
    <button onClick={() => removeTask(id)} className='delete is-medium is-pulled-right'/>;

export default connect(null, mapDispatch)(RemoveBuildOrderTasks);
