import styles from './Albums.module.scss';

const albums = [
    {
        cover: 'static/images/albums/11.jpg',
        name: 'Řeka',
        released: '2020',
        label: 'Animal Music',
        links: [
            {
                name: 'Animal Music',
                link: '#',
            },
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/10.jpg',
        name: 'V hodině smrti',
        released: '2014',
        label: 'SUPRAPHON, a.s.',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/9.jpg',
        name: 'Life at Café v lese',
        released: '2013',
        label: 'SUPRAPHON, a.s.',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/8.jpg',
        name: 'Baromantika',
        released: '2011',
        label: '100PROmotion',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/7.jpg',
        name: 'Eternal Seekers',
        released: '2008',
        label: 'Animal Music',
        links: [],
    },
    {
        cover: 'static/images/albums/6.jpg',
        name: 'Mezi světy (US Edice)',
        released: '2006',
        label: 'Yonas Media',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/6.jpg',
        name: 'Mezi světy',
        released: '2005',
        label: 'Universal Music',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/5.jpg',
        name: 'UnEarthEd',
        released: '2004',
        label: 'Playing Fields Records',
        links: [],
    },
    {
        cover: 'static/images/albums/4.jpg',
        name: 'Spatřit světlo světa',
        released: '2002',
        label: 'Universal Music',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/3.jpg',
        name: 'Lenka Dusilová',
        released: '2000',
        label: 'B&M Music',
        links: [
            {
                name: 'Supraphonline',
                link: '#',
            },
            {
                name: 'Apple iTunes',
                link: '#',
            },
        ],
    },
    {
        cover: 'static/images/albums/2.jpg',
        name: 'Pusa',
        released: '2000',
        label: 'BMG Music Ariola',
        links: [],
    },
    {
        cover: 'static/images/albums/1.jpg',
        name: 'Sluníčko',
        released: '1994',
        label: 'BMG Music Ariola',
        links: [],
    },
];

export const Albums = () => {
    return (
        <>
            <div className={styles['albums']}>
                {albums.map((album, index) => (
                    <div className={styles['album']} key={index}>
                        <div className={styles['album__cover']}>
                            <img src={album.cover} />
                        </div>
                        <div className={styles['album__info']}>
                            <h4>{album.name}</h4>
                            <p>
                                {album.label}, {album.released}
                            </p>
                            <div className={styles['info__links']}>
                                {album.links.length > 0 &&
                                    album.links.map((link, index) => (
                                        <a href={link.link} target="_blank" key={index}>
                                            {link.name}
                                            <svg viewBox="0 0 512 512">
                                                <path d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"></path>
                                            </svg>
                                        </a>
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
