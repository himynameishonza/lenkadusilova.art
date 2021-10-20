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
            <Page background="static/images/kontakt.jpg" twoColumns active={4} title="Kontakt">
                <p>Todo...</p>
            </Page>
        </>
    );
}
