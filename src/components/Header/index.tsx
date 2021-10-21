import classnames from 'classnames';
import styles from './Header.module.scss';

export type HeaderProps = {
    active?: number,
    title?: string,
};

export const Header = ({active = 0, title}: HeaderProps) => {
    return (
        <div className={styles['header']}>
            <a className={styles['header__logo']} href="/">
                <svg viewBox="0 0 64 65">
                    <path
                        d="m719.536232 418v.00371l.080749.000639c17.934228.286681 32.383019 14.709468 32.383019 32.459419 0 13.651392-8.546554 25.334744-20.652163 30.132805l-5.387948-11.907235c7.358437-2.78219 12.590836-9.892834 12.590836-18.22557 0-10.757546-8.720715-19.478261-19.478261-19.478261h-18.086957v38.956522h18.086957c.311013 0 .620323-.007289.92777-.021706l.00038 12.994565c-.154471.004215-.309208.007381-.464204.009491l-.000178.003157h-31.536232v-64.927536z"
                        fillRule="evenodd"
                        transform="translate(-688 -418)"
                    />
                </svg>
                <span>{title}</span>
            </a>
            <a className={styles['header__toggle']}>
                <svg viewBox="0 0 448 512">
                    <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
                </svg>
            </a>
            <nav className={styles['header__navigation']}>
                <ul>
                    <li className={classnames({[styles['active']]: active === 1})}>
                        <a href="/o-lence">O Lence</a>
                    </li>
                    <li className={classnames({[styles['active']]: active === 2})}>
                        <a href="/koncerty">Koncerty</a>
                    </li>
                    <li className={classnames({[styles['active']]: active === 3})}>
                        <a href="/diskografie">Diskografie</a>
                    </li>
                    <li className={classnames({[styles['active']]: active === 4})}>
                        <a href="/kontakt">Kontakt</a>
                    </li>
                    <li className={classnames({[styles['active']]: active === 5})}>
                        <a href="/pro-poradatele">Pro pořadatele</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
