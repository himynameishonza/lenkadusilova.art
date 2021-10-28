import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './Concerts.module.scss';

export type ConcertsProps = {
    muteControl?: any,
};

export const Concerts = ({muteControl}: ConcertsProps) => {
    const [data, setData] = useState(null);
    const [concerts, setConcerts] = useState(null);
    const [loading, setLoading] = useState(true);

    const parseDate = date => {
        var d = new Date(date),
            day = '' + d.getDate();

        if (day.length < 2) day = '0' + day;

        return [day];
    };

    const parseMonth = date => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1);

        if (month.length < 2) month = '0' + month;

        switch (month) {
            case '1':
                month = 'Leden';
                break;

            case '2':
                month = 'Únor';
                break;

            case '3':
                month = 'Březen';
                break;

            case '4':
                month = 'Duben';
                break;

            case '5':
                month = 'Květen';
                break;

            case '6':
                month = 'Červen';
                break;

            case '7':
                month = 'Červenec';
                break;

            case '8':
                month = 'Srpen';
                break;

            case '9':
                month = 'Září';
                break;

            case '10':
                month = 'Říjen';
                break;

            case '11':
                month = 'Listopad';
                break;

            default:
                month = 'Prosinec';
        }

        return [month];
    };

    useEffect(() => {
        axios
            .get(
                'https://culter.cz/exp_terminy_xml_kname.php?kname=Dusilenka&token=5879545eb7055268eaaab9c5744d7226'
            )
            .then(function (response) {
                setData(response.data);
                var XMLParser = require('react-xml-parser');
                var xml = new XMLParser().parseFromString(data);
                setConcerts(xml);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [data]);

    return (
        <>
            <div className={styles['concerts']}>
                {loading ? (
                    <div className={styles['concerts__loading']}>Načítám koncerty...</div>
                ) : (
                    concerts.children.map((concert, index) => (
                        <div className={styles['concert']} key={index}>
                            <div className={styles['concert__date']}>
                                <div className={styles['date__day']}>
                                    {parseDate(concert.children[3].value)}
                                </div>
                                <div className={styles['date__month']}>
                                    {' '}
                                    {parseMonth(concert.children[3].value)}
                                </div>
                            </div>

                            <div className={styles['concert__info']}>
                                <h4>{concert.children[6].value}</h4>
                                <p>
                                    {concert.children[8].value} @ {concert.children[5].value},{' '}
                                    {concert.children[4].value}
                                </p>
                                <a href={concert.children[7].value} target="_blank">
                                    Web pořadatele
                                    <svg viewBox="0 0 512 512">
                                        <path d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};
