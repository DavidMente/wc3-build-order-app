import React, {FunctionComponent} from 'react';
import {FormErrors} from '../../store/common/types';

interface FormErrorComponentProps {
    errors: FormErrors,
    field: string,
}

export const FormErrorComponent: FunctionComponent<FormErrorComponentProps> = ({errors, field}) =>
    errors[field] ? <p className='help is-danger'>{errors[field].message}</p> : <span/>;
