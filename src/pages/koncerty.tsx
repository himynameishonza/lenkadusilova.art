import React, {useState} from 'react';
import {Concerts} from '../components/Concerts';
import {Header} from '../components/Header';
import {HeadMeta} from '../components/HeadMeta';
import {HeroBar} from '../components/HeroBar';
import {Page} from '../components/Page';
import {VideoBackground} from '../components/VideoBackground';

export default function Index() {
    const [muted, setMuted] = useState(true);

    return (
        <>
            <HeadMeta pageTitle="Koncerty" />
            <Page background="static/images/koncerty.jpg" twoColumns active={2} title="Koncerty">
                <Concerts />
            </Page>
        </>
    );
}
