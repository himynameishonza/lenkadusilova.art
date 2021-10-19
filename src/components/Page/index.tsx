import React from 'react';
import {Header} from '../Header';
import {Loader} from '../Loader';
import styles from './Page.module.scss';

export type PageProps = {
    children?: React.ReactNode,
    isLoading?: boolean,
};

export const Page = ({children, isLoading = false}: PageProps) => {
    return (
        <div className={styles['page']}>
            <div className={styles['page__content']}>
                <Header />
                {isLoading && <Loader />}
                {children}
            </div>
        </div>
    );
};
