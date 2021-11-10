import styles from './Downloads.module.scss';

const files = [
    [
        {
            fileURL: 'static/files/LenkaDusilova-solo_text.pdf',
            name: 'Lenka Dusilová sólo - Anotace',
            description: '',
            size: '524 kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/files/LenkaDusilova-Kvety_text.pdf',
            name: 'Lenka Dusilová feat. Květy - Anotace',
            description: '',
            size: '529 kB',
            type: 'PDF',
        },

        {
            fileURL: 'static/files/LenkaDusilova-AidKid_text.pdf',
            name: 'Lenka Dusilová & Aid Kid - Anotace',
            description: '',
            size: '522 kB',
            type: 'PDF',
        },
    ],
    [
        {
            fileURL: 'static/files/LenkaDusilova-solo_repertoarovy-list.doc',
            name: 'Lenka Dusilová sólo - Repertoárový list',
            description: '',
            size: '28 kB',
            type: 'DOC',
        },
        {
            fileURL: 'static/files/LenkaDusilova-solo_technicky-rider.pdf',
            name: 'Lenka Dusilová sólo - Technický rider',
            description: '',
            size: '173 kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/files/LenkaDusilova-Kvety_stageplan.pdf',
            name: 'Lenka Dusilová feat. Květy - Stageplan',
            description: '',
            size: '357 kB',
            type: 'PDF',
        },
        {
            fileURL: 'static/files/LenkaDusilova-Kvety_repertoarovy-list.docx',
            name: 'Lenka Dusilová feat. Květy - Repertoárový list',
            description: '',
            size: '14 kB',
            type: 'DOCX',
        },
    ],
    [
        {
            fileURL: 'static/files/Promo1_BetOrten.jpg',
            name: 'Promo foto #1 - Album Řeka',
            description: '© Bet Orten',
            size: '3,7 MB',
            type: 'JPG',
        },
        {
            fileURL: 'static/files/Promo2_BetOrten.jpg',
            name: 'Promo foto #2 - Album Řeka',
            description: '© Bet Orten',
            size: '823 kB',
            type: 'JPG',
        },
        {
            fileURL: 'static/files/Promo3_FrantisekOrtmann.jpeg',
            name: 'Promo foto #3 - Lenka Dusilová feat. Květy',
            description: '© František Ortmann',
            size: '14,9 MB',
            type: 'JPG',
        },
        {
            fileURL: 'static/files/Promo4_RomekHanzlik.jpg',
            name: 'Promo foto #4 - Monument/Um',
            description: '© Romek Hanzlík',
            size: '3,6 MB',
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
                                <div className={styles['file__download']}>
                                    <span>{file.size}</span>
                                    <svg viewBox="0 0 384 512">
                                        <path d="M348.5 232.1l-148 148.4c-4.7 4.7-12.3 4.7-17 0l-148-148.4c-4.7-4.7-4.7-12.3 0-17l19.6-19.6c4.8-4.8 12.5-4.7 17.1.2l93.7 97.1V44c0-6.6 5.4-12 12-12h28c6.6 0 12 5.4 12 12v248.8l93.7-97.1c4.7-4.8 12.4-4.9 17.1-.2l19.6 19.6c4.9 4.7 4.9 12.3.2 17zM372 428H12c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h360c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12z"></path>
                                    </svg>
                                </div>
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};
