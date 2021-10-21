import styles from './Downloads.module.scss';

const files = [
    [
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Text o Lence',
            description: '',
            size: '256kB',
            type: 'PDF',
        },
    ],
    [
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Lenka Dusilová Sólo - Repertoárový list',
            description: '',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Lenka Dusilová Sólo - Technický rider',
            description: '',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Lenka Dusilová & Květy - Stageplan',
            description: '',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Lenka Dusilová & Květy - Repertoárový list',
            description: '',
            size: '256kB',
            type: 'PDF',
        },
    ],
    [
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Promo foto #1',
            description: '© Ben Orten',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Promo foto #2',
            description: '© Ben Orten',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Promo foto #3',
            description: '© František Ortmann',
            size: '256kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/images/albums/11.jpg',
            name: 'Promo foto #4',
            description: '© Romek Hanzlík',
            size: '256kB',
            type: 'PDF',
        },
    ],
];

export const Downloads = () => {
    return (
        <>
            <div className={styles['downloads']}>
                {files.map((group, index) => (
                    <div className={styles['file-group']} key={index}>
                        {group.map((file, index) => (
                            <a className={styles['file']} key={index} href={file.fileURL} download>
                                <div className={styles['file__info']}>
                                    <h4>{file.name}</h4>
                                    <p>{file.description}</p>
                                </div>
                                <a className={styles['file__download']}>
                                    <span>{file.size}</span>
                                    <svg viewBox="0 0 384 512">
                                        <path d="M348.5 232.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V44c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z"></path>
                                    </svg>
                                </a>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
