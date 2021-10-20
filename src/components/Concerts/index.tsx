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
            {loading ? (
                <div>Načítám</div>
            ) : (
                <div className={styles['concerts']}>
                    {concerts.children.map(concert => (
                        <div className={styles['concert']}>
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
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};
