import React, {FunctionComponent} from 'react';
import {RootState} from '../../store';
import {connect, ConnectedProps} from 'react-redux';
import {updateBuildOrder} from '../../store/build_order_form/actions';
import {FormErrorComponent} from './formErrorComponent';

const mapState = (state: RootState) => {
    return {
        id: state.buildOrderForm._id,
        name: state.buildOrderForm.name,
        description: state.buildOrderForm.description,
        author: state.buildOrderForm.author,
        password: state.buildOrderForm.password,
        errors: state.buildOrderForm.errors,
    };
};

const mapDispatch = {
    handleInputChange: (name: string | null, description: string | null,
                        author: string | null, password: string | null | undefined) =>
        updateBuildOrder({
            name,
            description,
            author,
            password,
        }),
};

const connector = connect(
    mapState,
    mapDispatch,
);

type EditBuildOrderMetadataProps = ConnectedProps<typeof connector> & {
    isNewBuildOrder: boolean,
}

const EditBuildOrderMetadata: FunctionComponent<EditBuildOrderMetadataProps> =
    ({name, description, handleInputChange, author, errors, password, id, isNewBuildOrder = true}) =>
        <div>
            <div className='field'>
                <label className={'label'}>Name:</label>
                <input type={'text'}
                       className={'input' + (errors.name ? ' is-danger' : '')}
                       value={name || ''}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                           handleInputChange(event.target.value, description, author, password)}
                       maxLength={100}
                />
                <FormErrorComponent errors={errors} field={'name'}/>
            </div>
            <div className='field'>
                <label className={'label'}>Author (optional):</label>
                <input type={'text'}
                       className={'input' + (errors.author ? ' is-danger' : '')}
                       value={author || ''}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                           handleInputChange(name, description, event.target.value, password)}
                       maxLength={20}
                />
                <FormErrorComponent errors={errors} field={'author'}/>
            </div>
            <div className='field'>
                <label className={'label'}>Description (optional):</label>
                <textarea value={description || ''}
                          className={'textarea' + (errors.description ? ' is-danger' : '')}
                          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                              handleInputChange(name, event.target.value, author, password)}
                          maxLength={1000} rows={2}
                />
                <FormErrorComponent errors={errors} field={'description'}/>
            </div>
            <div className='field'>
                <label className={'label'}>Password{isNewBuildOrder ? ' (leave blank to auto-generate)' : ''}:</label>
                <input value={password || ''}
                       className={'input' + (errors.password ? ' is-danger' : '')}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                           handleInputChange(name, description, author, event.target.value)}
                       maxLength={50}
                />
                <FormErrorComponent errors={errors} field={'password'}/>
                <p className={'help'}>Passwords are required to edit a build order later on. They are stored in your
                    browser. If you want to make sure that you don't lose the password by clearing local storage,
                    save it somewhere else.</p>
            </div>
        </div>;

export default connector(EditBuildOrderMetadata);
