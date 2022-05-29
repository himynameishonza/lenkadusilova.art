import classnames from 'classnames';
import {useState} from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {
    active?: number,
    title?: string,
};

export const Header = ({active = 0, title}: HeaderProps) => {
    const [mobileNav, setMobileNav] = useState(false);

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
            <a className={styles['header__toggle']} onClick={() => setMobileNav(!mobileNav)}>
                {mobileNav ? (
                    <svg viewBox="0 0 320 512">
                        <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                    </svg>
                ) : (
                    <svg viewBox="0 0 448 512">
                        <path d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"></path>
                    </svg>
                )}
            </a>
            <nav
                className={classnames(styles['header__navigation'], {
                    [styles['header__navigation--active']]: mobileNav,
                })}
            >
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
                    <li>
                        <a
                            href="/https://lenkadusilova.unimerch.cz/vse"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Shop
                        </a>
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
