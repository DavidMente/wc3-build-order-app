import React, {FunctionComponent} from 'react';

interface BuildOrderLayoutProps {
    header: JSX.Element,
    actions?: JSX.Element,
    buildOrder: JSX.Element,
    summary: JSX.Element,
}

export const BuildOrderLayout: FunctionComponent<BuildOrderLayoutProps> = ({header, buildOrder, summary, actions}) =>
    <div className={'columns'}>
        <div className={'column'}>
            {header}
        </div>
        <div className={'column'}>
            {actions}
            <div className={'box'}>
                <h2 className='title is-5'>Build order</h2>
                {buildOrder}
            </div>
            {summary}
        </div>
    </div>;
