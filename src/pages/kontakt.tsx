import React, {useState} from 'react';
import {Header} from '../components/Header';
import {HeadMeta} from '../components/HeadMeta';
import {HeroBar} from '../components/HeroBar';
import {Page} from '../components/Page';
import {VideoBackground} from '../components/VideoBackground';

export default function Index() {
    const [muted, setMuted] = useState(true);

    return (
        <>
            <HeadMeta />
            <Page
                background="static/images/kontakt.jpg"
                backgroundPosition="bottom center"
                fullPage
                active={4}
                title="Kontakt"
            >
                <article>
                    <h4>General management</h4>
                    <p>
                        Tomáš Paleta / APPLAUSE booking
                        <br />
                        +420 774 231 568
                        <br />
                        <a href="mailto:tpaleta@applausebooking.cz">tpaleta@applausebooking.cz</a>
                    </p>
                </article>
                <article>
                    <h4>Pro média</h4>
                    <p>
                        Zdena Selingerová
                        <br />
                        +420 602 282 730
                        <br />
                        <a href="mailto:zdena.selingerova@gmail.com">zdena.selingerova@gmail.com</a>
                    </p>
                </article>

                <article>
                    <small>
                        Na webu jsou použity fotografie těchto autorů: Bet Orten, Adam Holý,
                        Michaela Hermína, H. Slavík, František Ortmann, Archiv Spitfire Company, M.
                        Hradecký, Martina Mlčúchová, Jan Zrzavý, Zuzana Bönish, klapper.cz
                    </small>
                </article>

                <article>
                    <p>
                        <strong>&copy; 2021 Lenka Dusilová</strong>
                    </p>
                </article>
            </Page>
        </>
    );
}
