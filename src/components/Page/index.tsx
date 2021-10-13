import Head from 'next/head';
import styles from './Page.module.scss';

export type PageProps = {
    children?: React.ReactNode,
};

export const Page = ({children}: PageProps) => {
    return (
        <div className={styles['page']}>
            <div className={styles['page__content']}>{children}</div>
        </div>
    );
};
