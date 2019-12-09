import React, {FunctionComponent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import slugify from 'slugify';

interface EditBuildOrderButtonProps {
    buildOrderId: number,
    buildOrderName: string,
}

const EditBuildOrderButton: FunctionComponent<EditBuildOrderButtonProps & RouteComponentProps> =
    ({buildOrderId, buildOrderName, history}) => {

        function redirectToBuildOrderForm(id: number) {
            history.push('/build_order/' + id + '/' + slugify(buildOrderName) + '/edit');
        }

        return <div>
            <button data-test-id={'edit-build-order'} onClick={() => redirectToBuildOrderForm(buildOrderId)}
                    className={'button'}>Edit
            </button>
            <p className={'help is-inline-block edit-info'}>*You can only edit build orders if you have the right
                password</p>
        </div>;
    };

export default withRouter(EditBuildOrderButton);
