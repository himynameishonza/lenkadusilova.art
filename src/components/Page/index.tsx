import classnames from 'classnames';
import React from 'react';
import {Header} from '../Header';
import {Loader} from '../Loader';
import styles from './Page.module.scss';

export type PageProps = {
    children?: React.ReactNode,
    isLoading?: boolean,
    background?: string,
    twoColumns?: boolean,
    active?: number,
    title?: string,
};

export const Page = ({
    children,
    isLoading = false,
    background,
    twoColumns = false,
    active,
    title,
}: PageProps) => {
    return (
        <div className={classnames(styles['page'], {[styles['page--cols']]: twoColumns})}>
            <Header active={active} />
            {isLoading && <Loader />}
            <div className={styles['page__content']}>{children}</div>
            {twoColumns && (
                <div
                    className={styles['page__image']}
                    style={{
                        background:
                            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0)), url(' +
                            background +
                            ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className={styles['image__decoration']}>
                        <span>{title}</span>
                    </div>
                </div>
            )}
        </div>
    );
};
