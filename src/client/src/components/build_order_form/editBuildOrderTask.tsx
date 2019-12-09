import React, {FunctionComponent} from 'react';
import {connect} from 'react-redux';
import {editBuildOrderTask} from '../../store/build_order_form/actions';

interface EditBuildOrderTaskProps {
    id: number,
    description: string | null,
    editTask: (id: number, description: string | null) => void,
}

const mapDispatch = {
    editTask: (id: number, description: string | null) =>
        editBuildOrderTask({id, description}),
};

const EditBuildOrderTask: FunctionComponent<EditBuildOrderTaskProps> = ({id, editTask, description}) =>
    <div>
        <textarea className={'textarea'} value={description || ''} rows={2} onChange={(
            event: React.ChangeEvent<HTMLTextAreaElement>,
        ): void => editTask(id, event.target.value)}/>
    </div>;

export default connect(null, mapDispatch)(EditBuildOrderTask);
