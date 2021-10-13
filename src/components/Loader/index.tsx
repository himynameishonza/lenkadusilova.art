import styles from './Loader.module.scss';

export type LoaderProps = {
    decoration?: boolean,
};

export const Loader = ({decoration}: LoaderProps) => {
    return (
        <div className={styles['loader']}>
            <div className={styles['loader__image']} />
            <div className={styles['loader__image-overlay']} />
            <div className={styles['loader__logo']}>
                <svg viewBox="0 0 64 65">
                    <path
                        d="m719.536232 418v.00371l.080749.000639c17.934228.286681 32.383019 14.709468 32.383019 32.459419 0 13.651392-8.546554 25.334744-20.652163 30.132805l-5.387948-11.907235c7.358437-2.78219 12.590836-9.892834 12.590836-18.22557 0-10.757546-8.720715-19.478261-19.478261-19.478261h-18.086957v38.956522h18.086957c.311013 0 .620323-.007289.92777-.021706l.00038 12.994565c-.154471.004215-.309208.007381-.464204.009491l-.000178.003157h-31.536232v-64.927536z"
                        fill="#fff"
                        fillRule="evenodd"
                        transform="translate(-688 -418)"
                    />
                </svg>
            </div>
        </div>
    );
};
