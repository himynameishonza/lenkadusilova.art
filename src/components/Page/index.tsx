import classnames from 'classnames';
import React from 'react';
import {Header} from '../Header';
import {Loader} from '../Loader';
import styles from './Page.module.scss';

export type PageProps = {
    children?: React.ReactNode,
    isLoading?: boolean,
    background?: string,
    backgroundPosition?: string,
    twoColumns?: boolean,
    fullPage?: boolean,
    active?: number,
    title?: string,
};

export const Page = ({
    children,
    isLoading = false,
    background,
    backgroundPosition = 'center',
    twoColumns = false,
    fullPage = false,
    active,
    title,
}: PageProps) => {
    return (
        <div
            className={classnames(styles['page'], {
                [styles['page--cols']]: twoColumns,
                [styles['page--full']]: fullPage,
            })}
        >
            <Header active={active} title={title} />
            {isLoading && <Loader />}
            <div className={styles['page__content']}>{children}</div>
            {(twoColumns || fullPage) && (
                <div
                    className={styles['page__image']}
                    style={{
                        background:
                            'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(' +
                            background +
                            ')',
                        backgroundSize: 'cover',
                        backgroundPosition: backgroundPosition,
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
